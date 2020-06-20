const menuBtn = document.querySelector('.nav-burger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// Listen for click events
document.querySelector('.nav-burger').addEventListener('click', function() {

  document.getElementById('nav-bar').style.display = 'block';

  document.querySelector('.logo-container').style.display = 'none';
});










