// Array of skills
const skills = ["HTML", "CSS", "JavaScript", "Git & GitHub", "And something more"];

// Target the <ul> where the skills will be displayed
const skillsList = document.getElementById("skills-list");

// Dynamically create <li> elements for each skill
skills.forEach(skill => {
    const li = document.createElement("li"); // Create <li> element
    li.textContent = skill; // Set the text inside <li>
    skillsList.appendChild(li); // Add <li> to the <ul>
});

// here I define the the themeToggle so we can use it
const themeToggle = document.getElementById("theme-toggle");

// Check saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "Toggle Light Mode";
}

// Update the theme toggle button and save the state
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Toggle Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "Toggle Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

// Array of projects
const projects = [
    { title: "To-Do App", link: "./to-do-app/index.html", description: "A simple app to manage tasks." },
    { title: "Portfolio Website", link: "#", description: "The website you're viewing now!" },
    { title: "Calculator", link: "#", description: "A basic calculator built with JavaScript." },
];

// Target the projects list container
const projectsList = document.getElementById("projects-list");

// Dynamically create and populate project items
projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;

    projectsList.appendChild(projectDiv);
});


// Target the form
const contactForm = document.getElementById("contact-form");

// Add an event listener for form submission
contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    // Collect form data
    const formData = new FormData(contactForm); // Extract form data
    const name = formData.get("name"); // Get the 'name' input value
    const email = formData.get("email"); // Get the 'email' input value
    const message = formData.get("message"); // Get the 'message' textarea value

    // Log the form data to the browser console
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Optional: Reset the form fields
    contactForm.reset();

    // Notify the user
    alert("Your message has been sent! (Logged to the console)");
});


// Click Counter Logic
let clickCount = 0;
const counterButton = document.getElementById("counter-button");
const clickCountDisplay = document.getElementById("click-count");

counterButton.addEventListener("click", () => {
    clickCount++;
    clickCountDisplay.textContent = `You have clicked the button ${clickCount} times.`;
});
