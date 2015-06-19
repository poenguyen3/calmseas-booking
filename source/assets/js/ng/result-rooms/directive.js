angular.module('calm-booking')
  .directive('resultRooms', function(){
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {
      	scope.showFeatureDetail = function(e, packInd, feaInd){
          $('.cs-feature-detail.pack-' + packInd).slideUp();
          $('.pack-' + packInd + '.detail-' + feaInd).stop().slideToggle();
          console.log('.pack-' + packInd + '.fea-' + feaInd);
        }
      }
  }
});