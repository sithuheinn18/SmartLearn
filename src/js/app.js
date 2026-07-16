import netlifyIdentity from 'netlify-identity-widget';

// Wait for DOM layout tree paths to assemble fully
document.addEventListener("DOMContentLoaded", () => {

    // --- LOADING SCREEN ELEMENTS 

    const loadingScreen = document.getElementById("loading");
    
    // --- MOBILE DRAWER NAV ELEMENTS ---
    const menuTrigger = document.getElementById("menu-trigger");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const navLinks = document.querySelectorAll(".nav-link");

    // --- DARK MODE ELEMENTS ---
    const themeToggle = document.querySelector(".logo-icon");
    const savedTheme = localStorage.getItem("theme");

    if(loadingScreen) {
        loadingScreen.classList.add("hidden");
    }

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

    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the element has entered the viewport boundary
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
                
                // Stop observing once animated so it doesn't repeat when scrolling up
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1, // Triggers when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Slight offset so it triggers just before hitting the bottom
    });

    scrollElements.forEach(el => elementObserver.observe(el));
});


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
            <a herf="#" class="btn-pill btn-outline auth-logout-btn">Log Out</button>
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
                closeMobileDrawer();
                
                // If already logged in somehow, jump straight to dashboard, otherwise open modal
                if (netlifyIdentity.currentUser()) {
                    window.location.href = 'courses.html';
                } else {
                    netlifyIdentity.open('login');
                }
            });
        });

        document.querySelectorAll('.auth-signup-trigger').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                closeMobileDrawer();
                
                // Smart check: send straight to workspace if verified, else prompt registry
                if (netlifyIdentity.currentUser()) {
                    window.location.href = 'courses.html';
                } else {
                    netlifyIdentity.open('signup');
                }
            });
        });
    }
}

// --- IDENTITY LIFECYCLE EVENT LISTENERS ---
netlifyIdentity.on('init', user => renderUserHeaderState());

netlifyIdentity.on('login', user => { 
    renderUserHeaderState(); 
    netlifyIdentity.close(); 
    window.location.href = 'courses.html'; 
});

netlifyIdentity.on('logout', () => {
    renderUserHeaderState();
    // If they log out while looking at the courses, boot them back to the landing homepage
    if (window.location.pathname.includes('courses.html')) {
        window.location.href = 'index.html';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderUserHeaderState();
});