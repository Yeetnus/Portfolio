document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleTheme");
    const body = document.body;

    // Vérifier si le mode sombre est déjà activé dans le stockage local
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        toggleButton.textContent = "Mode clair";
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark");
        const isDarkMode = body.classList.contains("dark");

        // Stocker la préférence de l'utilisateur
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");

        toggleButton.textContent = isDarkMode ? "Mode clair" : "Mode sombre";
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Ajustement pour éviter que la navbar cache la section
                behavior: 'smooth'
            });
        }
    });
});
