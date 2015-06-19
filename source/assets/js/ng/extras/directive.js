angular.module('calm-booking')
	.directive('extras', function(){
		return {
			restrict: 'A',
			link: function(scope, elm, attrs){
				scope.toggleExtraDetail = function(e, ind){
					e.preventDefault();
					elm.find('.detail-' + ind).slideToggle();
				}
			}
		}
	});