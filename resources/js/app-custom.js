$(document).ready(function(){
  if ($(".alert").length > 0) {
      setTimeout(function() {
          $('.alert').fadeOut('fast');
      }, 3000);
  }

  $('.icon-box a .exhibit').on('mouseover', function() {
      $(this).find('img').attr('src', '/images/exhibit.svg');
  });

  $('.icon-box a .exhibit').on('mouseout', function() {
      $(this).find('img').attr('src', '/images/exhibit-inactive.svg');
  });

  $('.icon-box a .manager').on('mouseover', function() {
      $(this).find('img').attr('src', '/images/manager.svg');
  });

  $('.icon-box a .manager').on('mouseout', function() {
      $(this).find('img').attr('src', '/images/manager-inactive.svg');
  });
});