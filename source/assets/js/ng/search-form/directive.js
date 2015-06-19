angular.module('calm-booking')
  .directive('searchFormControl', function(){
    return {
      restrict: 'A',
      link: function(scope, elm, attrs){

        // Setting up datepicker
        var today = new Date(),
            checkoutPicker = elm.find('.datepicker-out'),
            checkinPicker = elm.find('.datepicker-in')

        checkinPicker.datepicker({
          numberOfMonths: 2,
          changeMonth: true,
          dateFormat: "dd-mm-yy",
          minDate: today,
          defaultDate: today,
          dayNamesMin: ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy'],
          monthNamesShort: ['Tháng 1', 'Tháng 2','Tháng 3', 'Tháng 4','Tháng5', 'Tháng 6','Tháng 7', 'Tháng 8','Tháng 9', 'Tháng 10 ', 'Tháng 11', 'Tháng 12'],
          onSelect: function(dateStr){
            var checkin = $(this).datepicker('getDate'),  
                checkout = null;
            checkoutPicker.datepicker('option', 'minDate', new Date(checkin.getTime() + 24 * 60 * 60 * 1000));
            checkout = checkoutPicker.datepicker('getDate');
            updateNightNum((checkout.getTime() - checkin.getTime()));            
            scope.$apply(function(){
              scope.csSearchParams.checkin = dateStr;
              scope.csSearchParams.checkout = checkoutPicker.val();
            });
          }
        });

        function updateNightNum(rangeTime){
          scope.$apply(function(){
            scope.csSearchParams.nightNum = rangeTime / (24*60*60*1000);

          })
        }

        checkoutPicker.datepicker({
          numberOfMonths: 2,
          changeMonth: true,
          dateFormat: "dd-mm-yy",
          minDate: today,
          defaultDate: today,
          dayNamesMin: ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy'],
          monthNamesShort: ['Tháng 1', 'Tháng 2','Tháng 3', 'Tháng 4','Tháng5', 'Tháng 6','Tháng 7', 'Tháng 8','Tháng 9', 'Tháng 10 ', 'Tháng 11', 'Tháng 12'],
          onSelect: function(dateStr){
            var checkout = $(this).datepicker('getDate'),  
                checkin = checkinPicker.datepicker('getDate');
            updateNightNum(checkout.getTime() - checkin.getTime());
            scope.$apply(function(){
              scope.csSearchParams.checkin = checkinPicker.val();
              scope.csSearchParams.checkout = dateStr;
            });
          }
        });          
      

        scope.collapseForm = function(event){
          event.stopPropagation();
          elm.find('.cs-search-form')
            .stop().slideUp({
              duration: 600,
              easing: 'easeOutQuart',
              complete: function(){
                elm.find('.container').removeClass('editing');
              }
            });
        };
        scope.checkExpand = function(event){
          event.stopPropagation();
          var container = elm.find('.container');
          if (!container.hasClass('editing')){
            container
              .addClass('editing')
              .find('.cs-search-form').slideDown({
                duration: 750,
                easing: 'easeOutQuart'
              });
          }
        };
      }
    }
  });
