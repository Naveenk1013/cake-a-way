// script.js
gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.from(".animate-fade-in", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".animate-fade-in.delay-1", {
    delay: 0.5
});

gsap.from(".animate-fade-in.delay-2", {
    delay: 1
});

// Section animations
const sections = document.querySelectorAll(".animate-section");
sections.forEach((section, index) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: index * 0.2
    });
});

// Contact form submission (simulated)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your message has been sent! (This is a simulation)");
    this.reset();
});