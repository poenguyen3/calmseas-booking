angular.module('calm-booking')
  .directive('checkRender', ['$timeout', function($timeout){
    return {
      restrict: 'A',
      link: function(scope, elm, attrs){
        $timeout(function(){
          $('#loading').fadeOut();
          elm.fadeIn(1400, 'easeInQuart', function(){
            $(window).trigger('resize.summary');
          });
        });
      }
    }
  }])
  .directive('csPopup', function(){
    return {
      restrict: 'A',
      link: function(scope, elm, attrs){
        var overlay = $('#flash-overlay');
        elm.find('.close-btn').on('click', function(){
          overlay.fadeIn({
            duration: 250,
            easing: 'easeOutQuart',
            complete: function(){
              elm.hide();
              overlay.fadeOut({
                duration: 120,
                easing: 'easeInQuart'
              });
            }
          });
        })
      }
    }
  })
  .directive('bookingNav', function(){
    return {
      restrict: 'A',
      link: function(scope, elm, attrs){
        console.log("IN");

        scope.goToStep3 = function(e){
          if (scope.csSearchParams.roomSelected) {
            var rooms = scope.csSearchParams.rooms;
            e.preventDefault();
            elm.find('.step-1, .step-2').removeClass('active');
            elm.find('.step-3').addClass('active');
            $('.step-container').hide();
            $('.step-3').stop().show();
            $(window).scrollTop(500);
          } else {
            alert("Bạn vui lòng chọn phòng trước khi tiếp tục");
          }
        }

        scope.goToStep1 = function(e){
          var rooms = scope.csSearchParams.rooms;
          e.preventDefault();
          elm.find('.step-3, .step-2').removeClass('active');
          elm.find('.step-1').addClass('active');
          $('.step-container').hide();
          $('.step-1').stop().show();
          scope.labels.validateBtnText = 'Đặt phòng';
        }

        scope.goToStep2 = function(e){
          if (scope.csSearchParams.roomSelected) {
            var rooms = scope.csSearchParams.rooms;
            e.preventDefault();
            elm.find('.step-1, .step-3').removeClass('active');
            elm.find('.step-2').addClass('active');
            console.log(elm);
            $('.step-container').hide();
            $('.step-2').stop().show();
            scope.labels.validateBtnText = 'Xác nhận';
          } else {
            alert("Bạn vui lòng chọn phòng trước khi tiếp tục!");
          }
        }
      }
    }
  });
