/**
 * @name Site
 * @description Define global variables and functions
 * @version 1.0
 */
var Site = (function($, window, undefined) {
  var privateVar = 1;

  function privateMethod1() {
    // todo
  }

  return {
    publicVar: 1,
    publicObj: {
      var1: 1,
      var2: 2
    },
    publicMethod1: privateMethod1
  };

})(jQuery, window);

jQuery(function() {
  $('.step-link').on('click', function(){
    $('.step-nav').removeClass('active');
    $(this).parents('.step-nav').addClass('active');
    $('.step-container').hide();
    $('.step-' + $(this).data('id')).stop().show();
  });
});
