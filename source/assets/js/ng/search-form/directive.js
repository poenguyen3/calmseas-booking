angular.module('calm-booking')
  .directive('searchFormControl', function(){
    return {
      restrict: 'A',
      link: function(scope, elm, attrs){

        elm.find('.datepicker').datepicker({
          numberOfMonths: 2
        })

        scope.collapseForm = function(event){
          event.stopPropagation();
          elm.find('.cs-search-form')
            .stop().slideUp({
              duration: 600,
              easing: 'easeInQuart',
              complete: function(){
                elm.find('.container').removeClass('editing');
              }
            });
        };
        scope.checkExpand = function(event){
          event.stopPropagation();
          if (!elm.hasClass('editing')){
            elm
              .find('.container').addClass('editing')
              .find('.cs-search-form').slideDown({
                duration: 750,
                easing: 'easeOutQuart'
              });
          }
        };
      }
    }
  });
