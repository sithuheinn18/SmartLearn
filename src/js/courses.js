import netlifyIdentity from 'netlify-identity-widget';

// ==========================================
// 🛠️ DEVELOPMENT CONTROLS
// Set this to true to mock a logged-in user and style the page freely!
// Set this to false before you commit and push to production.
const DESIGN_MODE = true; 
// ==========================================

const puzzleDatabase = {
    logic: {
        title: "Deductive Syllogisms",
        question: "If all A are B, and some B are C... Are all A definitely C?",
        options: [
            { text: "Yes, this logic naturally compiles.", correct: false },
            { text: "No, it is structurally impossible.", correct: false },
            { text: "Is it impossible to tell precisely without data mapping.", correct: true }
        ],
        explanation: "🧠 **Intuition Matrix:** Think of circles (Venn Diagrams). All of Circle A sits securely inside Circle B. Circle C overlaps with *some* parts of Circle B, but it doesn't necessarily have to touch Circle A at all! Hence, it is impossible to determine without further parameter parameters."
    }
};

const workspaceElement = document.getElementById('activePuzzleCard');

function initWorkspace() {
    // 🚀 If Design Mode is active, bypass the Netlify authentication shield completely
    if (DESIGN_MODE) {
        console.log("🛠️ SmartLearn: Design Mode Active. Auth shield bypassed.");
        renderActivePuzzle('logic');
        return;
    }

    // Normal secure authentication pipeline
    const user = netlifyIdentity.currentUser();
    if (!user) {
        workspaceElement.innerHTML = `
            <div class="gate-fallback">
                <h3>🔒 Secure Verification Required</h3>
                <p>Please authenticate or register your profile matrix via the header links to access active puzzles.</p>
            </div>
        `;
        return;
    }

    renderActivePuzzle('logic');
}

function renderActivePuzzle(trackKey) {
    const puzzle = puzzleDatabase[trackKey];
    if (!puzzle) return;

    workspaceElement.innerHTML = `
        <div class="puzzle-header">
            <span class="category-tag">${trackKey.toUpperCase()} // MODULE 01</span>
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
    `;

    workspaceElement.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => handleAnswerSelection(e, puzzle));
    });
}

function handleAnswerSelection(e, puzzle) {
    const selectedIdx = parseInt(e.target.dataset.index);
    const chosenOption = puzzle.options[selectedIdx];
    const feedbackPanel = document.getElementById('feedbackPanel');

    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('incorrect', 'correct'));

    if (chosenOption.correct) {
        e.target.classList.add('correct');
        feedbackPanel.innerHTML = `<div class="alert success">✨ **Correct Execution!** <br>${puzzle.explanation}</div>`;
    } else {
        e.target.classList.add('incorrect');
        feedbackPanel.innerHTML = `<div class="alert warning">❌ **Incorrect Conclusion.** <br>${puzzle.explanation}</div>`;
    }
    
    feedbackPanel.classList.remove('hidden');
}

netlifyIdentity.on('login', () => initWorkspace());
netlifyIdentity.on('logout', () => initWorkspace());

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initWorkspace, 300);
});