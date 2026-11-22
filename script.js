

const typingText = document.getElementById("typingText");

const words = [

    "Front-End Developer.",
    "Creative Thinker.",
    "Problem Solver.",
    "learning more.",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {





        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 100);
}

typeEffect();


/* =========================
   2. SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   3. NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   4. MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("open")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }

});

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.querySelector("i")
            .classList.replace("fa-xmark", "fa-bars");

    });

});


/* =========================
   5. ACTIVE NAVIGATION LINK
========================= */

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navItems.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);

sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================
   6. PROFILE CARD MOUSE EFFECT
========================= */

const profileCard = document.querySelector(".profile-card");
const heroVisual = document.querySelector(".hero-visual");

if (
    profileCard &&
    heroVisual &&
    window.matchMedia("(pointer: fine)").matches
) {

    heroVisual.addEventListener("mousemove", event => {

        const rect = heroVisual.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 30;
        const rotateX = (centerY - y) / 30;

        profileCard.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    heroVisual.addEventListener("mouseleave", () => {

        profileCard.style.transform = "";

    });

}


/* =========================
   7. CURRENT YEAR
========================= */

const footerText = document.querySelector(".footer p");

if (footerText) {

    footerText.textContent =
        `Designed & built with creativity by basmala Yasser © ${new Date().getFullYear()}`;

}
