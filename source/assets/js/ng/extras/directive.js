angular.module('calm-booking')
	.directive('extras', function(){
		return {
			restrict: 'A',
			link: function(scope, elm, attrs){
				scope.toggleExtraDetail = function(e, ind, groupInd, packID){
					e.preventDefault();
					console.log(ind, groupInd, packID);
					$(e.currentTarget).toggleClass('active');
					elm.find('.detail-' + packID + groupInd + '-' + ind).slideToggle().toggleClass('active');
				}
			}
		}
	});
