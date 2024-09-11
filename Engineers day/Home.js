// Countdown Timer Script
const eventDate = new Date('2024-09-14T00:00:00').getTime();
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('menu-open');
    menuIcon.classList.toggle('menu-open');
}

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days >= 0 ? days : 0;
    document.getElementById("hours").innerHTML = hours >= 0 ? hours : 0;
    document.getElementById("minutes").innerHTML = minutes >= 0 ? minutes : 0;
    document.getElementById("seconds").innerHTML = seconds >= 0 ? seconds : 0;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = "<h2>The Event Has Started!</h2>";
    }
}, 1000);
