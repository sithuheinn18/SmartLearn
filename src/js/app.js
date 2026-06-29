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
    container: '#netlify-auth-root',
    locale: 'en'
});

// Select layout element structures
const desktopAuthContainer = document.querySelector('.auth-buttons-desktop');
const mobileAuthContainer = document.querySelector('.mobile-only-actions');

// --- HELPER FUNCTION: FORCE MOBILE DRAWER TO SHUT DEFTLY ---
function closeMobileDrawer() {

    const menuTrigger = document.getElementById("menu-trigger");
    const mobileDrawer = document.getElementById("mobile-drawer");
    // 1. Remove common active layout state classes if present
    if (mobileDrawer && menuTrigger) {
        mobileDrawer.classList.remove("open");
        menuTrigger.classList.remove("open-active");
    }
}

// --- RENDER DYNAMIC NAVIGATION ---
function renderUserHeaderState() {
    const user = netlifyIdentity.currentUser();
    
    if (user) {
        // --- LOGGED IN ARCHITECTURE ---
        const displayName = user.user_metadata.full_name || user.email.split('@')[0];
        const loggedInMarkup = `
            <span class="user-display">👋 ${displayName}</span>
            <button class="btn-pill btn-outline auth-logout-btn">Log Out</button>
        `;
        
        if (desktopAuthContainer) desktopAuthContainer.innerHTML = loggedInMarkup;
        if (mobileAuthContainer) mobileAuthContainer.innerHTML = loggedInMarkup;
        
        document.querySelectorAll('.auth-logout-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                closeMobileDrawer(); // Shut drawer on logout
                netlifyIdentity.logout();
            });
        });
        
    } else {
        // --- UN-AUTHENTICATED ARCHITECTURE ---
        if (desktopAuthContainer) {
            desktopAuthContainer.innerHTML = `
                <a href="#" class="btn-text auth-signin-trigger">Sign In</a>
                <a href="#" class="btn-pill btn-primary auth-signup-trigger">Get Started</a>
            `;
        }
        
        if (mobileAuthContainer) {
            mobileAuthContainer.innerHTML = `
                <a href="#" class="btn-text auth-signin-trigger">Sign In</a>
                <a href="#" class="btn-pill btn-primary auth-signup-trigger">Get Started</a>
            `;
        }
        
        // Bind actions + close active drawer container
        document.querySelectorAll('.auth-signin-trigger').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                closeMobileDrawer(); // 🔥 Clear the drawer screen viewport instantly!
                netlifyIdentity.open('login');
            });
        });

        document.querySelectorAll('.auth-signup-trigger').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                closeMobileDrawer(); // 🔥 Clear the drawer screen viewport instantly!
                netlifyIdentity.open('signup');
            });
        });
    }
}

// --- IDENTITY LIFECYCLE EVENT LISTENERS ---
netlifyIdentity.on('init', user => renderUserHeaderState());
netlifyIdentity.on('login', user => { renderUserHeaderState(); netlifyIdentity.close(); });
netlifyIdentity.on('logout', () => renderUserHeaderState());

document.addEventListener('DOMContentLoaded', () => {
    renderUserHeaderState();
});