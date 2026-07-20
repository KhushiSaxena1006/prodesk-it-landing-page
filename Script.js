const menuToggle = document.getElementById("menuToggle");
const navigationLinks = document.getElementById("navigationLinks");

const themeToggle = document.getElementById("themeToggle");


// MOBILE MENU

menuToggle.addEventListener("click", () => {

    navigationLinks.classList.toggle("active");

});


// DARK MODE

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-theme")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

const navLinks = document.querySelectorAll("#navigationLinks a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigationLinks.classList.remove("active");

    });

});