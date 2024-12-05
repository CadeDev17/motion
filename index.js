// Custom Cursor Movement
const cursor = document.querySelector('.custom-cursor');

// Update cursor position on mousemove
document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Highlight nav items on hover
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.style.background = 'radial-gradient(circle, rgba(255,255,0,0.7), rgba(255,255,255,0))';
  });

  link.addEventListener('mouseleave', () => {
    cursor.style.background = 'radial-gradient(circle, rgba(255,255,255,0.5), rgba(255,255,255,0))';
  });
});

// Add a white underglow to a different nav item for a few seconds every 15 seconds
let currentIndex = 0;

function showTemporaryGlow() {
  // Remove glow from all nav items
  navLinks.forEach(link => link.classList.remove('under-glow'));

  // Add glow to the current nav item
  navLinks[currentIndex].classList.add('under-glow');

  // Remove glow after a few seconds (e.g., 3 seconds)
  setTimeout(() => {
    navLinks[currentIndex].classList.remove('under-glow');
  }, 3000); // Duration of the underglow (in milliseconds)

  // Update index to point to the next nav item
  currentIndex = (currentIndex + 1) % navLinks.length;
}

// Start the cycle: every 15 seconds, show the underglow on the next item
setInterval(showTemporaryGlow, 15000);

// Initialize the first glow
showTemporaryGlow();

