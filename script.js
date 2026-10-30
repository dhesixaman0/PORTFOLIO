// ─── TYPEWRITER EFFECT ───────────────────────────────────────────
const roles = [
  "Full-Stack Developer",
  "Aspiring Product Manager",
  "Business Analyst",
  "MERN Stack Engineer",
  "Problem Solver",
];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const roleEl = document.getElementById("roleText");

function typeWrite() {
  const current = roles[roleIndex];
  if (isDeleting) {
    roleEl.textContent = current.substring(0, --charIndex);
  } else {
    roleEl.textContent = current.substring(0, ++charIndex);
  }
  let delay = isDeleting ? 60 : 100;
  if (!isDeleting && charIndex === current.length) {
    delay = 1800; isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }
  setTimeout(typeWrite, delay);
}
typeWrite();

// ─── NAVBAR SCROLL ───────────────────────────────────────────────
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // sticky navbar
  navbar.classList.toggle("scrolled", scrollY > 60);

  // back-to-top visibility
  backToTop.classList.toggle("show", scrollY > 400);

  // active nav link
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) link.classList.toggle("active", scrollY >= top && scrollY < bottom);
  });
});

// ─── HAMBURGER MENU ──────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const navLinksEl = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinksEl.classList.toggle("open");
});

// close on link click (mobile)
navLinksEl.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinksEl.classList.remove("open");
  });
});

// ─── BACK TO TOP ─────────────────────────────────────────────────
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ─── CONTACT FORM ────────────────────────────────────────────────
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const status = document.getElementById("formStatus");
  const name = document.getElementById("name").value.trim();
  const emailVal = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !emailVal || !message) {
    status.className = "form-status error";
    status.textContent = "Please fill in all required fields.";
    return;
  }

  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

  // Simulate sending (replace with real backend / EmailJS / Formspree)
  setTimeout(() => {
    status.className = "form-status success";
    status.textContent = `Thanks, ${name}! I'll get back to you soon 🚀`;
    e.target.reset();
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    setTimeout(() => { status.textContent = ""; status.className = "form-status"; }, 5000);
  }, 1600);
}

// ─── SCROLL-IN ANIMATIONS ─────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  ".skill-category, .project-card, .cert-card, .timeline-card, .contact-item"
).forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// ─── FOOTER YEAR ─────────────────────────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();
