// Код для відкривання та закривання меню
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    closeAll = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeAll.addEventListener('click', () => {
    menu.classList.remove('active');
});

//-----------------------------------------------------------------
// Код для зміни кольору бокової панелі
window.addEventListener('scroll', function() {
    var sidepanelLinks = document.querySelectorAll('.sidepanel__link');
    var sidepanelDivider = document.querySelector('.sidepanel__divider');
    var sidepanelText = document.querySelector('.sidepanel__text');
  
    var windowHeight = window.innerHeight;
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    var scrollThreshold = windowHeight * 0.6; // Значення прокрутки замість 75vh
  
    if (scrollTop >= scrollThreshold) {
      sidepanelLinks.forEach(function(link) {
        var paths = link.querySelectorAll('svg path');
        paths.forEach(function(path) {
          path.setAttribute('fill', 'black');
        });
      });
      sidepanelDivider.style.backgroundColor = 'black';
      sidepanelText.style.color = 'black';
    } else {
      sidepanelLinks.forEach(function(link) {
        var paths = link.querySelectorAll('svg path');
        paths.forEach(function(path) {
          path.setAttribute('fill', '#ffffff');
        });
      });
      sidepanelDivider.style.backgroundColor = '#ffffff';
      sidepanelText.style.color = '#ffffff';
    }
  });
//-----------------------------------------------------------------
// Переведення відсотків в skills
const counters = document.querySelectorAll('.skills__rating-counter'),
      lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
//-----------------------------------------------------------------

