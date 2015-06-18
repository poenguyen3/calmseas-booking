angular.module('calm-booking')
  .controller('booking-central', ['$scope', function($scope){
    $scope.csRoomSearch = {greet: 'hello'};
    setTimeout(function(){
      console.log($scope.csRoomSearch);
    },2500);
  }])
