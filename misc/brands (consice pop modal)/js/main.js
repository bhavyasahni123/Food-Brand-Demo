// Existing JavaScript code moved here
const animatedText = document.querySelector(".animated-text");
const sidebar = document.getElementById("sidebar");
const hoverZone = document.getElementById("hoverZone");

hoverZone.addEventListener("mouseenter", () => {
  sidebar.classList.add("show");
});

sidebar.addEventListener("mouseenter", () => {
  sidebar.classList.add("show");
});

sidebar.addEventListener("mouseleave", () => {
  sidebar.classList.remove("show");
});

// Add touch support so that the sidebar shows on mobile
if ("ontouchstart" in window) {
  hoverZone.addEventListener("touchstart", () => {
    sidebar.classList.add("show");
  });
  sidebar.addEventListener("touchstart", () => {
    sidebar.classList.add("show");
  });
  sidebar.addEventListener("touchend", () => {
    sidebar.classList.remove("show");
  });
}

// Brand info data (logo and description)
// Developer: Add logo images to the project directory and update src if needed
const brandData = {
  "Ohsoyum1!": {
    logo: "logo_ohsoyum1.png",
    desc: "American Authentic burger brand. Savor the juiciest, most flavorful burgers made with premium ingredients and classic American recipes.",
  },
  "The Delicio Pizza": {
    logo: "logo_delicio_pizza.png",
    desc: "Authentic Italian pizza. Experience the taste of Italy with our hand-tossed pizzas, fresh mozzarella, and traditional sauces.",
  },
  "Shah Jahani Biryani": {
    logo: "logo_shah_jahani.png",
    desc: "Made in the kitchen of great Mughal emperor Shah Jahan. Authentic Mughlai dishes with rich flavors and royal heritage.",
  },
  "The Wholesome Bowl": {
    logo: "logo_wholesome_bowl.png",
    desc: "Rice bowls. Nutritious, balanced, and delicious rice bowls for a wholesome meal experience.",
  },
  "Chow Chow": {
    logo: "logo_chow_chow.png",
    desc: "Chinese brand - Mandarin. Dive into the world of Mandarin cuisine with our range of Chinese delicacies.",
  },
  "Signature Curry": {
    logo: "logo_signature_curry.png",
    desc: "Authentic North Indian curry. Relish the rich, aromatic curries inspired by North Indian traditions.",
  },
  "Lunch@1": {
    logo: "logo_lunch1.png",
    desc: "Thali’s. Enjoy a complete Indian meal with our variety-packed thalis, perfect for lunch.",
  },
  "Khata Metha": {
    logo: "logo_khata_metha.png",
    desc: "Ultimate street food. A celebration of sweet and tangy flavors from the streets of India.",
  },
  // Add more brands here if needed
};

// Modal logic for brand info
const brandCards = document.querySelectorAll(".brand-card");
const brandModal = document.getElementById("brandModal");
const brandModalLogo = document.getElementById("brandModalLogo");
const brandModalTitle = document.getElementById("brandModalTitle");
const brandModalDesc = document.getElementById("brandModalDesc");
const brandModalClose = document.getElementById("brandModalClose");

// Show modal on brand card click and animate button gradient
brandCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Modal logic
    const brand = card.getAttribute("data-brand");
    const info = brandData[brand];
    if (info) {
      brandModalLogo.src = info.logo;
      brandModalLogo.alt = brand + " Logo";
      brandModalTitle.textContent = brand;
      brandModalDesc.textContent = info.desc;
      brandModal.classList.add("active");
    }
  });
});

// Close modal on close button click or outside click
brandModalClose.addEventListener("click", () => {
  brandModal.classList.remove("active");
});
brandModal.addEventListener("click", (e) => {
  if (e.target === brandModal) {
    brandModal.classList.remove("active");
  }
});

// Add cursor-following purple glow effect for sidebar nav a
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar nav a").forEach(function (link) {
    link.addEventListener("mousemove", function (e) {
      const rect = link.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      link.style.setProperty("--mx", mx + "px");
      link.style.setProperty("--my", my + "px");
    });
    link.addEventListener("mouseleave", function () {
      link.style.removeProperty("--mx");
      link.style.removeProperty("--my");
    });
  });
});

// Add performance optimizations
document.addEventListener("DOMContentLoaded", () => {
  // Lazy load images
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
});

// Add error handling
window.addEventListener("error", (e) => {
  console.error("Page Error:", e.message);
  // Send to analytics if needed
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll('.box-fade-in');
  animatedElements.forEach(el => {
    // Force a reflow then add the "animate" class to trigger the animation
    void el.offsetWidth;
    el.classList.add('animate');
  });
});
