angular.module('calm-booking')
  .directive('resultRooms', function(){
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {
      	scope.showFeatureDetail = function(e, roomInd, packInd, feaInd){
          e.preventDefault();

          var expandDetail = $('.cs-feature-detail.expanding'),
              detailLenth = expandDetail.length,
              wantToClose = false,
              detailId = 'detail-' + roomInd + '-' + packInd + '-' + feaInd,
              i = 0;
          if (detailLenth) {
            expandDetail.slideUp({
              complete: function(){
                if ($(this).attr('id') === (detailId)) {
                  wantToClose = true;
                }
                i++;
                if (i === detailLenth && !wantToClose) {
                 console.log(wantToClose);
                 $('#detail-' + roomInd + '-' + packInd + '-' + feaInd)
                  .stop().slideDown().addClass('expanding');
                }
              }
            }).removeClass('expanding');
          }
          else {
            $('#' + detailId)
              .stop().slideDown().addClass('expanding');
          }
        }
      }
  }
})
  .directive('onFinishSlider', ['$timeout', function($timeout){
    return {
      restrict: 'A',
      link: function(scope, elm, attrs){
        var slider =  elm.parents('.gallery-slider');
        if (scope.$last === true) {
          $timeout(function(){
            slider.slick({
              dots: true
            });
          });
        }
      }
    }
  }])
  .directive('onFinishThumbslider', ['$timeout', function($timeout){
    return {
      restrict: 'A',
      link: function(scope, elm, attrs){
        if (scope.$last === true) {
          var thumbSlider = elm.parents('.thumb-slider'),
              navFor = thumbSlider.data('id');

          console.log(navFor, $('.' + navFor).length);
          $timeout(function(){
            thumbSlider.slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              asNavFor: '.' + navFor,
              focusOnSelect: true
            });
          });
        }
      }
    }
  }]);
