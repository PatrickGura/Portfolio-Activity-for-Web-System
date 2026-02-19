// Show a welcome alert when the button is clicked
function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

// Typing animation for roles
const roles = ["IT Student", "FSUU student", "Future Developer"];
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
    const el = document.getElementById("role");
    if (!el) return;

    if (charIndex < roles[roleIndex].length) {
        el.textContent += roles[roleIndex][charIndex];
        charIndex++;
        setTimeout(typeRole, 150);
    } else {
        setTimeout(eraseRole, 1000);
    }
}

function eraseRole() {
    const el = document.getElementById("role");
    if (!el) return;

    if (charIndex > 0) {
        el.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 100);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

// Start typing animation on page load
window.onload = typeRole;
