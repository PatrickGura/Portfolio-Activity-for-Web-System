function showMessage() {
    alert("Email: patrick.gura@urios.edu.ph\nPhone: 09692008709\nLocation: Butuan City");
}

const roles = ["IT Student", "Future Developer", "Tech Enthusiast"];
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
    const el = document.getElementById("role");
    if (!el) return;

    if (charIndex < roles[roleIndex].length) {
        el.textContent += roles[roleIndex][charIndex];
        charIndex++;
        setTimeout(typeRole, 120);
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
        setTimeout(eraseRole, 60);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

window.onload = function () {
    typeRole();
};