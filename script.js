// FAQ Accordion
const faqItems = document.querySelectorAll(".faqItem");

faqItems.forEach(item => {
    const button = item.querySelector(".faqQuestion");
    button.addEventListener("click", () => {
        faqItems.forEach(f => {
            if (f !== item) {
                f.classList.remove("active");
            }
        });
        item.classList.toggle("active");
    });
});

// Scroll To Top
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}