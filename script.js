function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// --- DARK MODE LOGIC ---

const themeToggle = document.getElementById("theme-toggle");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");

// 1. Check for saved theme in localStorage on page load
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateIcons(true);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    const isDark = document.body.classList.contains("dark-mode");
    
    // 2. Save the preference to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
    
    updateIcons(isDark);
}

// Helper function to keep both icons in sync
function updateIcons(isDark) {
    const iconText = isDark ? "🌞" : "🌙";
    if (themeToggle) themeToggle.textContent = iconText;
    if (themeToggleMobile) themeToggleMobile.textContent = iconText;
}

// Add click event to both icons
themeToggle.addEventListener("click", toggleDarkMode);
themeToggleMobile.addEventListener("click", toggleDarkMode);
