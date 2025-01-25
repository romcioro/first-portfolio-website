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

// for the Project Section
const projects = [
    { title: "To-Do App", description: "A simple app to manage tasks." },
    { title: "Portfolio Website", description: "The website you're viewing now!" },
    { title: "Calculator", description: "A basic calculator built with JavaScript." },
];

const projectsList = document.getElementById("projects-list");

projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    projectsList.appendChild(projectDiv);
});

