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
        const user = netlifyIdentity.currentUser();
        const userId = user ? user.id : "dev_sithu_hein"; // Matching dev fallback

        // 1. Fetch the master course list mapping array
        const courseResponse = await fetch('/courses.json');
        if (!courseResponse.ok) throw new Error("Data retrieval anomaly.");
        const courses = await courseResponse.json();

        // 2. Fetch user's real progress data map from our MongoDB cloud API backend
        const progressResponse = await fetch(`/.netlify/functions/get-progress?userId=${userId}`);
        if (!progressResponse.ok) throw new Error("Failed syncing user logs.");
        const cloudProgressList = await progressResponse.json();

        // Convert cloud progress array into an easily readable lookup object: { logic: 100, math: 50 }
        const progressLookup = {};
        cloudProgressList.forEach(item => {
            progressLookup[item.courseId] = item.progress;
        });

        // Filter courses down to only tracks that have cloud progress entries saved
        const enrolledCourses = courses.filter(course => progressLookup[course.id] !== undefined);

        // Attach the computed dynamic lookup tracking straight onto our rendering engines
        window.currentProgressMap = progressLookup; 

        renderDashboardTracks(enrolledCourses);
        updateMetrics(enrolledCourses);

    } catch (error) {
        console.error(error);
        if (enrollmentContainer) {
            enrollmentContainer.innerHTML = `<p class="grid-message">Failed to sync profile metrics stream.</p>`;
        }
    }
}

function renderDashboardTracks(activeTracks) {
    if (!enrollmentContainer) return;

    if (activeTracks.length === 0) {
        enrollmentContainer.innerHTML = `<p class="grid-message">No active data paths initialized in your cloud profile loop yet.</p>`;
        return;
    }

    enrollmentContainer.innerHTML = activeTracks.map(track => {
        // Read progress value from our global window lookup tracker populated by the database
        const realProgress = window.currentProgressMap[track.id] || 0;
        
        return `
            <div class="dashboard-track-card animate-on-scroll">
                <div class="track-icon-badge">${track.icon}</div>
                <div class="track-details">
                    <span class="track-badge">${track.category}</span>
                    <h3>${track.title}</h3>
                    <div class="dashboard-progress-container">
                        <div class="dashboard-bar-wrapper">
                            <div class="dashboard-bar-fill" style="width: ${realProgress}%;"></div>
                        </div>
                        <span class="progress-lbl">${realProgress}% Complete</span>
                    </div>
                </div>
                <a href="workspace.html?course=${track.id}" class="action-btn-resume">
                    ${realProgress === 100 ? "Review Arena" : "Resume Arena"}
                </a>
            </div>
        `;
    }).join('');
}

function updateMetrics(tracks) {
    const completedElement = document.getElementById('statCompleted');
    const xpElement = document.getElementById('statXP');

    let completedCount = 0;
    let totalXP = 0;

    tracks.forEach(track => {
        const progress = window.currentProgressMap[track.id] || 0;
        if (progress === 100) completedCount++;
        totalXP += Math.round(progress * 1.5); 
    });

    if (completedElement) completedElement.innerText = completedCount;
    if (xpElement) xpElement.innerText = `${totalXP} XP`;
}