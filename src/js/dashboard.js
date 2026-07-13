import netlifyIdentity from 'netlify-identity-widget';

// ==========================================
// 🛠️ DEVELOPMENT CONTROLS
const DESIGN_MODE = true; 
// ==========================================

const enrollmentContainer = document.getElementById('enrollmentListContainer');
const nameElement = document.getElementById('profileName');
const emailElement = document.getElementById('profileEmail');

document.addEventListener('DOMContentLoaded', () => {
    netlifyIdentity.init();
    
    // Wire up standard identity status changes
    netlifyIdentity.on('login', () => syncProfileState());
    netlifyIdentity.on('logout', () => syncProfileState());

    syncProfileState();
});

function syncProfileState() {
    const user = netlifyIdentity.currentUser();

    if (!DESIGN_MODE && !user) {
        // Force authentication boundary redirect if active user isn't present
        window.location.href = 'courses.html';
        return;
    }

    // Populate user profile information fields cleanly
    if (user) {
        nameElement.innerText = user.user_metadata.full_name || "Enlightened Student";
        emailElement.innerText = user.email;
    } else if (DESIGN_MODE) {
        nameElement.innerText = "Sithu Hein (Dev)";
        emailElement.innerText = "developer@smartlearn.local";
    }

    loadEnrolledTracks();
}

async function loadEnrolledTracks() {
    try {
        const response = await fetch('/courses.json');
        if (!response.ok) throw new Error("Data retrieval anomaly.");
        const courses = await response.json();

        // Simulated Enrollment State (In production, this array pulls from a user database!)
        // Let's pretend the user has active tracking loops in 'logic' and 'math'
        const enrolledIds = ['logic', 'math']; 
        const enrolledCourses = courses.filter(c => enrolledIds.includes(c.id));

        renderDashboardTracks(enrolledCourses);
        updateMetrics(enrolledCourses);

    } catch (error) {
        console.error(error);
        if (enrollmentContainer) {
            enrollmentContainer.innerHTML = `<p class="grid-message">Failed to process profile data stream rules.</p>`;
        }
    }
}

function renderDashboardTracks(activeTracks) {
    if (!enrollmentContainer) return;

    if (activeTracks.length === 0) {
        enrollmentContainer.innerHTML = `<p class="grid-message">You are not currently enrolled in any paths. Head to the catalog to initialize one!</p>`;
        return;
    }

    // Map out dynamic layout components with custom hardcoded visual bars for demonstration
    enrollmentContainer.innerHTML = activeTracks.map((track, index) => {
        // Let's simulate distinct progress points for each path item
        const simulatedProgress = index === 0 ? 50 : 0; 
        
        return `
            <div class="dashboard-track-card">
                <div class="track-icon-badge">${track.icon}</div>
                <div class="track-details">
                    <span class="track-badge">${track.category}</span>
                    <h3>${track.title}</h3>
                    
                    <div class="dashboard-progress-container">
                        <div class="dashboard-bar-wrapper">
                            <div class="dashboard-bar-fill" style="width: ${simulatedProgress}%;"></div>
                        </div>
                        <span class="progress-lbl">${simulatedProgress}% Complete</span>
                    </div>
                </div>
                <a href="workspace.html?course=${track.id}" class="action-btn-resume">Resume Arena</a>
            </div>
        `;
    }).join('');
}

function updateMetrics(tracks) {
    const completedElement = document.getElementById('statCompleted');
    const xpElement = document.getElementById('statXP');

    if (completedElement) completedElement.innerText = "0"; // Hardcoded initial placeholder values
    if (xpElement) xpElement.innerText = `${tracks.length * 120} XP`;
}