angular.module('calm-booking')
  .service('booking', ['booking-config', '$http', function(bookingConf, $http){
  	return {
  		send: function(data){
  			$http.post(bookingConf.serverUrl + bookingConf.bookingPath).success(function(res){
  				console.log(res);
  			});
  		}
  	};
  }]);
