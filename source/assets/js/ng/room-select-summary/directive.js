angular.module('calm-booking')
  .directive('roomSelectSummary', function(){
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {
      	console.log(elm);
      	elm.on('resize', function(){

      	});

      	scope.toggleDetail = function(e, id) {
      		e.preventDefault();
      		$('#' + id).slideToggle();
      		return false;
      	};
      }
  }
});