$(document).ready(function () {
  let item = $('.menu-item');
  
  item.on('click', function(event) {
    event.preventDefault();
    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.menu-item_active').toggleClass('menu-item_active');
    $(this).toggleClass('menu-item_active');
  });

  });