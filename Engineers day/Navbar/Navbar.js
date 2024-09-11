document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarItems = document.getElementById('navbarItems');

  let isOpen = false;

  navbarToggle.addEventListener('click', function () {
    isOpen = !isOpen;
    if (isOpen) {
      navbarToggle.innerHTML = '<span style="font-size:25px">&#x2716;</span>'; // Close icon
      navbarItems.classList.add('open');
    } else {
      navbarToggle.innerHTML = '☰'; // Menu icon
      navbarItems.classList.remove('open');
    }
  });

  // Close the menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar-items a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navbarItems.classList.remove('open');
      navbarToggle.innerHTML = '☰';
      isOpen = false;
    });
  });
});

