// script.js

// A. Change Theme Button (Dark Mode / Light Mode)
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Update button text
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Toggle Light Mode';
    } else {
        themeBtn.textContent = 'Toggle Dark Mode';
    }
});

// B. Edit Job Title Feature
const editJobBtn = document.getElementById('editJobBtn');
const jobTitle = document.getElementById('jobTitle');
editJobBtn.addEventListener('click', () => {
    const newTitle = prompt('Enter new job title:');
    if (newTitle) {
        jobTitle.textContent = newTitle;
    }
});

// C. Show/Hide Skills Feature
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skillsSection');
toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
});

// D. Live Character Counter for Message Textarea
const msgBox = document.getElementById('msgBox');
const counter = document.getElementById('counter');
msgBox.addEventListener('keyup', () => {
    const remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
});

// E. Form Validation Before Sending
const contactForm = document.getElementById('contactForm');
const nameField = document.getElementById('nameField');
const emailField = document.getElementById('emailField');
contactForm.addEventListener('submit', (e) => {
    if (!nameField.value.trim() || !emailField.value.trim()) {
        alert('Please fill in both Name and Email fields.');
        e.preventDefault();
    } else {
        alert('Message sent successfully!');
        // In a real scenario, you'd handle the form submission here
    }
});

// F. Automatically Display Today’s Date in Footer
const dateDisplay = document.getElementById('dateDisplay');
const today = new Date();
dateDisplay.textContent = today.toDateString();

// G. Extra Feature: Greeting Based on Time
const greetingText = document.getElementById('greetingText');
const hour = new Date().getHours();
let greeting;
if (hour < 12) {
    greeting = 'Good morning!';
} else if (hour < 18) {
    greeting = 'Good afternoon!';
} else {
    greeting = 'Good evening!';
}
greetingText.textContent = greeting;
