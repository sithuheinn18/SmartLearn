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