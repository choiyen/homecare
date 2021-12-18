const toggleBtn = document.querySelector('.navber__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__links');


toggleBtn.addEventListener('click',()=> {
   menu.classList.toggle('active');
   icons.classList.toggle('active');
});


$('.phone').keydown(function(event) {
   var key = event.charCode || event.keyCode || 0;
   $text = $(this);
   if (key !== 8 && key !== 9) {
       if ($text.val().length === 3) {
           $text.val($text.val() + '-');
       }
       if ($text.val().length === 8) {
           $text.val($text.val() + '-');
       }
   }

   return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));          
});
