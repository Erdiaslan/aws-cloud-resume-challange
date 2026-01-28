// Typewriter Effect with Loop
const typewriterText = "Cloud Engineer ☁️";
const typewriterElement = document.getElementById('typewriter');
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (!isDeleting && charIndex < typewriterText.length) {
        // Typing
        typewriterElement.textContent += typewriterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else if (!isDeleting && charIndex === typewriterText.length) {
        // Pause before deleting
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, 2000);
    } else if (isDeleting && charIndex > 0) {
        // Deleting
        typewriterElement.textContent = typewriterText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, 50);
    } else if (isDeleting && charIndex === 0) {
        // Pause before typing again
        isDeleting = false;
        setTimeout(typeWriter, 500);
    }
}

// Start typewriter effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Navigation functionality
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

// Navigation click handler
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// Scroll-based active section detection
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});
// Visitor Counter (Cloud Resume Challenge)
const COUNTER_API_URL = "https://mybl8ca3xc.execute-api.eu-central-1.amazonaws.com/count";

async function updateVisitorCounter() {
  const el = document.getElementById("counter");
  if (!el) return;

  try {
    const res = await fetch(COUNTER_API_URL, { method: "GET" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json(); // Lambda: { "views": 123 }
    el.textContent = typeof data.views === "number" ? data.views : "N/A";
  } catch (err) {
    console.error("Visitor counter error:", err);
    el.textContent = "N/A";
  }
}

// Sayfa yüklenince sayacı güncelle
window.addEventListener("load", () => {
  updateVisitorCounter();
});
