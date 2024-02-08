document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementsByClassName('zijKnop')[0];
  const navbarLinks = document.getElementsByClassName('navigatieLinks')[0];

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
});