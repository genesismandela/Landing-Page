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
  var navShowHide = document.getElementById('nav-bar');
  if (navShowHide.style.display === 'block') {
    navShowHide.style.display = 'none';
  } else {
    navShowHide.style.display = 'block';
  }

  var logoShowHide = document.querySelector('.logo-container');
  if (navShowHide.style.display === 'block') {
    logoShowHide.style.display = 'none';
  } else {
    logoShowHide.style.display = 'flex';
  }
});



var rightgear = document.getElementById("header-img");
    
window.addEventListener("scroll", function() {
    rightgear.style.transform = "rotate(-"+window.pageYOffset+"deg)";
});









