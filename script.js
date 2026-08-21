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

// Copy Contract Address
function copyCA() {
    var text = document.getElementById("ca").innerText;
    navigator.clipboard.writeText(text).then(function() {
        // Change button text to "Copied!"
        var btn = document.querySelector('.copyBtn');
        var originalText = btn.innerText;
        btn.innerText = "✅ Copied!";
        btn.style.background = "#00ffbf";
        setTimeout(function() {
            btn.innerText = originalText;
            btn.style.background = "linear-gradient(135deg, #00d4ff, #2877ff)";
        }, 2000);
    }).catch(function() {
        // Fallback for older browsers or local testing
        var textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        var btn = document.querySelector('.copyBtn');
        var originalText = btn.innerText;
        btn.innerText = "✅ Copied!";
        btn.style.background = "#00ffbf";
        setTimeout(function() {
            btn.innerText = originalText;
            btn.style.background = "linear-gradient(135deg, #00d4ff, #2877ff)";
        }, 2000);
    });
}