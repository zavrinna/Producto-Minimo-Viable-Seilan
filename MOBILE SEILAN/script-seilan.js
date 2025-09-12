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
const ctaButtons = document.querySelectorAll('.cta-btn');
ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        // You can implement booking functionality here
        alert('¡Gracias por tu interés! Te contactaremos pronto.');
    });
});

// Map Implementation
function initMap() {
    // Coordinates for Paipa, Boyacá
    const paipaCoords = [5.7833, -73.1167];
    
    // Initialize the map
    const map = L.map('map').setView(paipaCoords, 13);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Custom marker icon
    const customIcon = L.divIcon({
        html: '<div style="background: #B22222; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });
    
    // Add marker for Seilan location
    const marker = L.marker(paipaCoords, { icon: customIcon }).addTo(map);
    
    // Add popup to marker
    marker.bindPopup(`
        <div style="text-align: center; font-family: 'Open Sans', sans-serif;">
            <strong>Seilan Alojamiento Rural</strong><br>
            <small>KM 2 Vía Paterna, Vereda Vargas<br>Paipa, Boyacá</small>
        </div>
    `);
    
    // Add some nearby points of interest
    const thermalSprings = L.marker([5.7900, -73.1200], { 
        icon: L.divIcon({
            html: '<div style="background: #4A90E2; width: 15px; height: 15px; border-radius: 50%; border: 2px solid white;"></div>',
            iconSize: [15, 15],
            iconAnchor: [7.5, 7.5]
        })
    }).addTo(map);
    
    thermalSprings.bindPopup('<strong>Termas de Paipa</strong><br><small>Aguas termales</small>');
    
    const airport = L.marker([5.7600, -73.1000], { 
        icon: L.divIcon({
            html: '<div style="background: #50C878; width: 15px; height: 15px; border-radius: 50%; border: 2px solid white;"></div>',
            iconSize: [15, 15],
            iconAnchor: [7.5, 7.5]
        })
    }).addTo(map);
    
    airport.bindPopup('<strong>Aeropuerto</strong><br><small>15 minutos</small>');
}

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

