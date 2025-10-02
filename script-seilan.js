// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
});

// Gallery Navigation
document.querySelectorAll(".cabin-gallery").forEach(gallery => {
  const images = gallery.querySelectorAll(".main-image img");
  const dots = gallery.querySelectorAll(".dot");
  let currentIndex = 0;

  // Función para mostrar imagen según índice
  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  // Event listeners en los dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showImage(index);
    });
  });

  // Inicia mostrando la primera
  showImage(0);
});

// Auto-slide functionality
setInterval(() => {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    updateSlide(currentSlide);
}, 5000);

// Language Selector
const flags = document.querySelectorAll('.flag');
flags.forEach(flag => {
    flag.addEventListener('click', () => {
        flags.forEach(f => f.classList.remove('active'));
        flag.classList.add('active');
        
        // Here you would implement language switching logic
        console.log('Language switched');
    });
});

// Smooth Scrolling for CTA buttons
// Redirigir todos los botones con clase .cta-btn
document.querySelectorAll('.cta-btn').forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = '../MOTORDERESERVAS/calendario/index-calendario.html';
  });
});


// Map Implementation
function initMap() {
  const paipaCoords = [5.792345, -73.127790];

  const map = L.map("map", {
    center: paipaCoords,
    zoom: 13,
    scrollWheelZoom: false,
    dragging: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker(paipaCoords).addTo(map)
    .bindPopup("<strong>Seilan Alojamiento Rural</strong><br><small>Paipa, Boyacá</small>")
    .openPopup();
}
document.addEventListener("DOMContentLoaded", initMap);

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure the map container is properly rendered
    setTimeout(initMap, 500);
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply scroll animations to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// WhatsApp button animation
const whatsappBtn = document.querySelector('.whatsapp-btn a');
if (whatsappBtn) {
    setInterval(() => {
        whatsappBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            whatsappBtn.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
}

