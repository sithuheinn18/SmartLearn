import netlifyIdentity from 'netlify-identity-widget';

// ==========================================
// 🛠️ DEVELOPMENT CONTROLS
const DESIGN_MODE = true; 
// ==========================================

let activeCourseData = null;
let currentPuzzleIndex = 0; 
let score = 0; // Track successful compilation runs!

const titleElement = document.getElementById('workspaceCourseTitle');
const cardElement = document.getElementById('activePuzzleCard');

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const activeCourseId = urlParams.get('course');

    if (!activeCourseId) {
        showError("No learning track parameter specified.");
        return;
    }
    initWorkspace(activeCourseId);
});

function initWorkspace(courseId) {
    if (!DESIGN_MODE && !netlifyIdentity.currentUser()) {
        showError("🔒 Secure Verification Required.");
        return;
    }
    loadWorkspaceData(courseId);
}

async function loadWorkspaceData(courseId) {
    try {
        const response = await fetch('/courses.json');
        if (!response.ok) throw new Error(`HTTP status: ${response.status}`);
        
        const courseDatabase = await response.json();
        activeCourseData = courseDatabase.find(course => course.id === courseId);

        if (!activeCourseData) {
            showError("The course track does not exist.");
            return;
        }

        if (titleElement) titleElement.innerText = activeCourseData.title;
        renderIntroScreen();

    } catch (error) {
        console.error(error);
        showError("Failed to synchronize active learning tracks.");
    }
}

function renderIntroScreen() {
    if (!cardElement || !activeCourseData) return;

    cardElement.innerHTML = `
        <div class="card-animator-wrapper">
            <div class="puzzle-header">
                <span class="category-tag">${activeCourseData.category.toUpperCase()} // WELCOME</span>
                <h2>${activeCourseData.title} Arena</h2>
            </div>
            <div class="puzzle-content">
                <p class="track-desc">${activeCourseData.description}</p>
                <div class="module-status-box">
                    <p>📋 Ready to begin? This track contains active puzzle modules loaded straight from data arrays.</p>
                </div>
            </div>
            <div class="puzzle-options">
                <button class="action-btn-primary" id="startLessonBtn">Initialize First Lesson</button>
            </div>
        </div>
    `;

    document.getElementById('startLessonBtn').addEventListener('click', () => {
        currentPuzzleIndex = 0;
        score = 0;
        renderActivePuzzle();
    });
}

function renderActivePuzzle() {
    const puzzles = activeCourseData.puzzles;
    
    if (!puzzles || puzzles.length === 0) {
        cardElement.innerHTML = `<p class="grid-message">No active puzzles uploaded for this track yet.</p>`;
        return;
    }

    const puzzle = puzzles[currentPuzzleIndex];
    
    // 📊 Dynamic Calculation: Fill progress accurately based on current card slot position
    const percentComplete = Math.round((currentPuzzleIndex / puzzles.length) * 100);

    cardElement.innerHTML = `
        <div class="card-animator-wrapper">
            <div class="puzzle-header">
                <div class="progress-meta">
                    <span class="category-tag">${activeCourseData.category.toUpperCase()} // QUESTION ${currentPuzzleIndex + 1} OF ${puzzles.length}</span>
                    <span class="progress-percentage-text" id="progressPercentText">${percentComplete}% Completed</span>
                </div>
                <div class="progress-bar-wrapper">
                    <div class="progress-bar-fill" id="progressBarFill"></div>
                </div>
                <h2>${puzzle.title}</h2>
            </div>
            <div class="puzzle-content">
                <p class="question-text">${puzzle.question}</p>
            </div>
            <div class="puzzle-options">
                ${puzzle.options.map((opt, idx) => `
                    <button class="option-btn" data-index="${idx}">${opt.text}</button>
                `).join('')}
            </div>
            <div class="feedback-panel hidden" id="feedbackPanel"></div>
            <div class="action-footer hidden" id="actionFooter">
                <button class="action-btn-primary" id="nextQuestionBtn">
                    ${currentPuzzleIndex === puzzles.length - 1 ? "Complete Quiz Evaluation" : "Proceed to Next Question ➡️"}
                </button>
            </div>
        </div>
    `;

    // Trigger initial question animation slide
    const fillElement = document.getElementById('progressBarFill');
    if (fillElement) {
        requestAnimationFrame(() => {
            fillElement.style.width = `${percentComplete}%`;
        });
    }

    cardElement.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => handleAnswerSelection(e, puzzle));
    });

    // 🔄 PROGRESSION ROUTER LOGIC
    document.getElementById('nextQuestionBtn').addEventListener('click', () => {
        if (currentPuzzleIndex === puzzles.length - 1) {
            // If it's the final question, transition cleanly to the results matrix dashboard
            renderQuizResults();
        } else {
            // Otherwise, advance internal trackers and render the next card array
            currentPuzzleIndex++;
            renderActivePuzzle();
        }
    });
}

function handleAnswerSelection(e, puzzle) {
    const selectedIdx = parseInt(e.target.dataset.index);
    const chosenOption = puzzle.options[selectedIdx];
    const feedbackPanel = document.getElementById('feedbackPanel');
    const actionFooter = document.getElementById('actionFooter');

    cardElement.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('incorrect', 'correct');
    });

    if (chosenOption.correct) {
        e.target.classList.add('correct');
        score++;
        feedbackPanel.className = "feedback-panel success";
        feedbackPanel.innerHTML = `
            <strong class="feedback-title">✨ Correct Answer!</strong>
            <p class="feedback-explanation">${puzzle.explanation}</p>
        `;
    } else {
        e.target.classList.add('incorrect');
        feedbackPanel.className = "feedback-panel warning";
        feedbackPanel.innerHTML = `
            <strong class="feedback-title">❌ Incorrect Conclusion.</strong>
            <p class="feedback-explanation">${puzzle.explanation}</p>
        `;
    }
    
    // 🔥 Dynamic Finish: If this is the last question, snap the progress metrics instantly to 100%
    if (currentPuzzleIndex === activeCourseData.puzzles.length - 1) {
        const fillElement = document.getElementById('progressBarFill');
        const textElement = document.getElementById('progressPercentText');
        if (fillElement) fillElement.style.width = "100%";
        if (textElement) textElement.innerText = "100% Completed";
    }

    feedbackPanel.classList.remove('hidden');
    actionFooter.classList.remove('hidden'); 
}

// 🏆 NEW: Completion Summary Frame Component
function renderQuizResults() {
    const finalPercent = Math.round((score / activeCourseData.puzzles.length) * 100);
    
    cardElement.innerHTML = `
        <div class="card-animator-wrapper">
            <div class="puzzle-header">
                <span class="category-tag">${activeCourseData.category.toUpperCase()} // EVALUATION MATRIX SECURED</span>
                <h2>Track Results Summary</h2>
            </div>
            <div class="puzzle-content">
                <div class="score-display-shield">
                    <span class="huge-score-text">${finalPercent}%</span>
                    <p>Calculated score mapping: <strong>${score} correct matrices</strong> out of ${activeCourseData.puzzles.length} configurations tested.</p>
                </div>
            </div>
            <div class="puzzle-options">
                <button class="action-btn-primary" id="retryTrackBtn">Restart Track Puzzles</button>
                <a href="courses.html" class="action-btn-secondary" style="text-align: center; text-decoration: none; display: block;">Return to Main Course Catalog</a>
            </div>
        </div>
    `;

    document.getElementById('retryTrackBtn').addEventListener('click', () => {
        currentPuzzleIndex = 0;
        score = 0;
        renderActivePuzzle();
    });
}

function showError(message) {
    if (cardElement) {
        cardElement.innerHTML = `<div class="grid-message"><p>${message}</p></div>`;
    }
}