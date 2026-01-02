function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Desktop and Mobile icons
const themeToggle = document.getElementById("theme-toggle");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    // Change icon: 🌙 for light, 🌞 for dark
    const icon = isDark ? "🌞" : "🌙";
    themeToggle.textContent = icon;
    themeToggleMobile.textContent = icon;
}

// Add click event to both icons
themeToggle.addEventListener("click", toggleDarkMode);
themeToggleMobile.addEventListener("click", toggleDarkMode);


