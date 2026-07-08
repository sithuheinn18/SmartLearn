const searchInput = document.getElementById('catalogSearch');
const gridContainer = document.getElementById('coursesGrid');
const resultCountText = document.getElementById('resultCount');

// --- ASYNCHRONOUS API DATA FETCH ENGINE ---
async function fetchAndRenderCourses(searchQuery = "") {
    try {
        gridContainer.innerHTML = `Searching data arrays...`;
        
        // Fetch from local Netlify proxy router
        const response = await fetch(`/.netlify/functions/get-courses?search=${encodeURIComponent(searchQuery)}`);
        if (!response.ok) throw new Error("Network pipeline transmission failure.");
        
        const courses = await response.json();
        renderGridCards(courses);
    } catch (err) {
        console.error(err);
        gridContainer.innerHTML = `Error loading courses catalog workspace.`;
    }
}

// --- RENDERING PARSER MATRIX ---
function renderGridCards(coursesArray) {
    resultCountText.innerText = `Showing ${coursesArray.length} available course tracks`;
    
    if (coursesArray.length === 0) {
        gridContainer.innerHTML = `No tracks found matching those keywords. Try another track!`;
        return;
    }

    gridContainer.innerHTML = coursesArray.map(course => `
        
            ${course.icon}
            
                ${course.category}
                ${course.title}
                ${course.description}
                
                    📋 ${course.modules} Modules
                    Start Track
                
            
        
    `).join('');
}

// --- LIVE INPUT SEARCH STREAM LISTENERS ---
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        fetchAndRenderCourses(e.target.value);
    });
}

// Initial baseline paint load
document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderCourses("");
});