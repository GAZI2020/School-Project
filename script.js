// JavaScript for enhanced functionality
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
      });
    });
  
    // Smooth scroll to section function
    function scrollToSection(id) {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjusted for header height
          behavior: 'smooth'
        });
      }
    }
  
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Simple form validation
      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset(); // Clear the form after submission
      } else {
        alert('Please fill out all fields before submitting.');
      }
    });
  
    // Image Gallery Hover Effect
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.querySelector('.image-overlay').style.opacity = '1';
      });
      card.addEventListener('mouseleave', () => {
        card.querySelector('.image-overlay').style.opacity = '0';
      });
    });
  
    // Event Countdown (if needed)
    const eventDates = [
      { date: new Date('2024-12-10'), eventName: 'Annual Day Celebration' },
      { date: new Date('2025-01-15'), eventName: 'New Admissions Open' },
      { date: new Date('2025-03-05'), eventName: 'Science Exhibition' }
    ];
  
    eventDates.forEach(event => {
      const today = new Date();
      const diffTime = event.date - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 0) {
        console.log(`Countdown: ${diffDays} days left until ${event.eventName}`);
      }
    });
  });
  // Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
