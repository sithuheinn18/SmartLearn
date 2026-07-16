import netlifyIdentity from 'netlify-identity-widget';

// ==========================================
// 🛠️ DEVELOPMENT CONTROLS
const DESIGN_MODE = false; 
// ==========================================

// 📦 This variable will securely store our streaming JSON array elements
let courseDatabase = [];

const gridContainer = document.getElementById('coursesGrid');
const searchInput = document.getElementById('catalogSearch');
const resultCountText = document.getElementById('resultCount');

//  Asynchronous Data Loader Engine

async function loadCourseDatabase() {
    try {
        // Pulling directly from the root served dist environment path
        const response = await fetch('/courses.json');
        if (!response.ok) throw new Error(`HTTP tracking failure. Status: ${response.status}`);
        
        courseDatabase = await response.json();
        performSearch(""); // Paint the grid layouts instantly!
    } catch (error) {
        console.error("Error fetching master course dataset:", error);
        gridContainer.innerHTML = `<div class="grid-message">Failed to process core data stream rules.</div>`;
    }
}

function initWorkspace() {
    if (!DESIGN_MODE) {
        const user = netlifyIdentity.currentUser();
        if (!user) {
            gridContainer.innerHTML = `
                <div class="grid-message">
                    <h3>🔒 Secure Verification Required</h3>
                    <p>Please authenticate or register your profile matrix to browse your course files.</p>
                </div>
            `;
            if (searchInput) searchInput.disabled = true;
            return;
        }
    }

    if (searchInput) searchInput.disabled = false;
    
    loadCourseDatabase(); 
}

// --- RENDERING PARSER AND STRUCTURAL FILTERS ---
function performSearch(searchQuery = "") {
    const cleanedQuery = searchQuery.toLowerCase().trim();
    
    const filtered = courseDatabase.filter(course => 
        course.title.toLowerCase().includes(cleanedQuery) ||
        course.category.toLowerCase().includes(cleanedQuery) ||
        course.description.toLowerCase().includes(cleanedQuery)
    );

    renderGridCards(filtered);
}

function renderGridCards(coursesArray) {
    if (resultCountText) {
        resultCountText.innerText = `Showing ${coursesArray.length} track paths available`;
    }

    if (coursesArray.length === 0) {
        gridContainer.innerHTML = `<div class="grid-message">No learning tracks match your query parameter strings.</div>`;
        return;
    }

    gridContainer.innerHTML = coursesArray.map(course => `
        <article class="course-card">
            <div class="card-icon-banner">${course.icon}</div>
            <div class="card-body">
                <span class="card-badge">${course.category}</span>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="card-footer">
                    <span class="module-count">📋 ${course.modules} Lessons</span>
                    <button class="btn-launch" data-id="${course.id}">Launch Track</button>
                </div>
            </div>
        </article>
    `).join('');

    gridContainer.querySelectorAll('.btn-launch').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const courseId = e.target.dataset.id;
            
            // Redirect securely to the workspace page, passing the track ID as a URL parameter
            window.location.href = `workspace.html?course=${courseId}`;
        });
    });
}

// --- LIVE SEARCH INPUT EVENT LISTENER ---
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });
}

netlifyIdentity.on('login', () => initWorkspace());
netlifyIdentity.on('logout', () => initWorkspace());

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initWorkspace, 300);
});