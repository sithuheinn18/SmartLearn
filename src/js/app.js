// Wait for DOM layout tree paths to assemble fully
document.addEventListener("DOMContentLoaded", () => {
    
    // --- MOBILE DRAWER NAV ELEMENTS ---
    const menuTrigger = document.getElementById("menu-trigger");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const navLinks = document.querySelectorAll(".nav-link");

    // --- DARK MODE ELEMENTS ---
    const themeToggle = document.querySelector(".logo-icon");
    const savedTheme = localStorage.getItem("theme");

    // Check if user previously saved a dark theme preference
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    // 💡 Click handler tracking routine for Dark Mode Toggle
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            // Toggle the dark-theme class on the body element
            document.body.classList.toggle("dark-theme");
            
            // Check if dark mode is active and save the preference
            if (document.body.classList.contains("dark-theme")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }

    // Click handler tracking routine for Mobile Menu Drawer
    if (menuTrigger && mobileDrawer) {
        menuTrigger.addEventListener("click", () => {
            // Toggle the open class parameters on our targets
            mobileDrawer.classList.toggle("open");
            menuTrigger.classList.toggle("open-active");
        });
    }

    // Close the drawer automatically if a user clicks an anchor navigation option
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mobileDrawer && menuTrigger) {
                mobileDrawer.classList.remove("open");
                menuTrigger.classList.remove("open-active");
            }
        });
    });
});

import netlifyIdentity from 'netlify-identity-widget';

// --- INITIALIZE NETLIFY CONFIGURATION ---
netlifyIdentity.init({
    container: '#netlify-auth-root', // Points to our root element
    locale: 'en',
});

const desktopAuthContainer = document.querySelector('.auth-buttons-desktop');

// --- RENDER DYNAMIC HEADER NAVIGATION ---
function renderUserHeaderState() {
    const user = netlifyIdentity.currentUser();
    
    if (user) {
        // User is logged in securely via Netlify
        const displayName = user.user_metadata.full_name || user.email.split('@')[0];
        
        desktopAuthContainer.innerHTML = `
            <span class="user-display">👋 ${displayName}</span>
            <button class="btn-pill btn-outline" id="logoutTrigger">Log Out</button>
        `;
        
        // Bind dynamic logout execution
        document.getElementById('logoutTrigger').addEventListener('click', () => {
            netlifyIdentity.logout();
        });
    } else {
        // Fallback back to standard unauthenticated navigation actions
        desktopAuthContainer.innerHTML = `
            <a href="#" class="btn-text" id="signinTrigger">Sign In</a>
            <a href="#" class="btn-pill btn-outline" id="signupTrigger">Get Started</a>
        `;
        
        // Bind modal open triggers
        document.getElementById('signinTrigger').addEventListener('click', (e) => {
            e.preventDefault();
            netlifyIdentity.open('login'); // Opens modal directly on login tab
        });

        document.getElementById('signupTrigger').addEventListener('click', (e) => {
            e.preventDefault();
            netlifyIdentity.open('signup'); // Opens modal directly on signup tab
        });
    }
}

// --- IDENTITY LIFECYCLE EVENT LISTENERS ---
netlifyIdentity.on('init', user => {
    renderUserHeaderState();
});

netlifyIdentity.on('login', user => {
    renderUserHeaderState();
    netlifyIdentity.close(); // Close modal on successful validation
});

netlifyIdentity.on('logout', () => {
    renderUserHeaderState();
});

// Run verification initial check
document.addEventListener('DOMContentLoaded', () => {
    renderUserHeaderState();
});