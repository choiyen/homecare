const toggleBtn = document.querySelector('.navber__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__links');


toggleBtn.addEventListener('click',()=> {
   menu.classList.toggle('active');
   icons.classList.toggle('active');
});

$(document).ready(function(){
    $('.slider').slider();
  });