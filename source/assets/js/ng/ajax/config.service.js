angular.module('calm-booking')
  .service('booking-config', [function(){
  	return {
  		serverUrl: 'http://localhost:88/calmseas/booking',
  		bookingPath: '/booking.php'	
  	}
  }]);
