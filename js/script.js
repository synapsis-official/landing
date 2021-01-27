$(function() {
  new WOW().init();
  $('a[href]').click(function(e) {
    const target = $(this).attr('href');
    if (target && target[0] === '#') {
      e.preventDefault();
      if (target.length < 1) {
        return;
      }
      $([document.documentElement, document.body]).animate({
        scrollTop: $(target).offset().top
      }, 500);
    }
  });
});
