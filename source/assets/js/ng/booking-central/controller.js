angular.module('calm-booking')
  .controller('booking-central', ['$scope', function($scope){
  	var today = new Date(),
  		nextDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  		todayFm = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
  		nextDateFm = nextDate.getDate() + '-' + (nextDate.getMonth() + 1) + '-' + nextDate.getFullYear();
  	$scope.csSearchParams = {
  		checkin: todayFm,
  		checkout: nextDateFm,
  		nightNum: 1,
  		rooms: [
  			{
  				selected: true,
				adult: 1,
				childs: [],	
				priceValue: 0,
				calPrice: '1,200,000',
				name: 'Standard room',
				package: 'GÓI TIẾT KIỆM MÙA HÈ'
  			},
  			{
  				selected: false,
				adult: 1,
				childs: [],
				priceValue: 0,
				calPrice: ''
  			},
  			{
  				selected: false,
				adult: 1,
				childs: [],
				priceValue: 0,
				calPrice: ''				
  			}
  		]
  	};
  	$scope.csRoomList = {
  		rooms: [
  			{
  				name: 'Standard Room',
  				imgs: [
  					{src:'images/photos/standar1.jpg', alt: 'Calmsesa Booking'}
  				],
  				packages: [
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						priceValue: 1200000,
  						price: '1,200,000',
  						calPriceValue: 1200000,
  						calPrice: '1,200,000',
  						feature: [
  							{
  								icon: 'fa-close',
  								text: 'Không bao gồm bữa sáng',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-close',
  								text: 'Không hủy phòng, không điều chỉnh sau khi đặt',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-credit-card',
  								text: 'Thanh toán ngay',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							}
  						]
  					},
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						priceValue: 1500000,
  						price: '1,500,000',
  						calPriceValue: 1500000,
  						calPrice: '1,500,000',
  						feature: [
  							{
  								icon: 'fa-close',
  								text: 'Không bao gồm bữa sáng',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-close',
  								text: 'Không hủy phòng, không điều chỉnh sau khi đặt',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-credit-card',
  								text: 'Thanh toán ngay',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							}
  						]
  					},
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						priceValue: 1200000,
  						price: '1,300,000',
  						calPriceValue: 1300000,
  						calPrice: '1,300,000',
  						feature: [
  							{
  								icon: 'fa-close',
  								text: 'Không bao gồm bữa sáng',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-close',
  								text: 'Không hủy phòng, không điều chỉnh sau khi đặt',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-credit-card',
  								text: 'Thanh toán ngay',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							}
  						]
  					}
  				]
  			},
  			{
  				name: 'Deluxe Room',
  				imgs: [
  					{src:'images/photos/double1.jpg', alt: 'Calmsesa Booking'}
  				],
  				packages: [
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						priceValue: 1200000,
  						price: '1,200,000',
  						calPriceValue: 1200000,
  						calPrice: '1,200,000',
  						feature: [
  							{
  								icon: 'fa-close',
  								text: 'Không bao gồm bữa sáng',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-close',
  								text: 'Không hủy phòng, không điều chỉnh sau khi đặt',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-credit-card',
  								text: 'Thanh toán ngay',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							}
  						]
  					},
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						priceValue: 1500000,
  						price: '1,500,000',
  						calPriceValue: 1500000,
  						calPrice: '1,500,000',
  						feature: [
  							{
  								icon: 'fa-close',
  								text: 'Không bao gồm bữa sáng',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-close',
  								text: 'Không hủy phòng, không điều chỉnh sau khi đặt',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-credit-card',
  								text: 'Thanh toán ngay',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							}
  						]
  					},
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						priceValue: 1200000,
  						price: '1,300,000',
  						calPriceValue: 1300000,
  						calPrice: '1,300,000',
  						feature: [
  							{
  								icon: 'fa-close',
  								text: 'Không bao gồm bữa sáng',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-close',
  								text: 'Không hủy phòng, không điều chỉnh sau khi đặt',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-credit-card',
  								text: 'Thanh toán ngay',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							}
  						]
  					}
  				]
  			},
  			{
  				name: 'Suite Room',
  				imgs: [
  					{src:'images/photos/suite1.jpg', alt: 'Calmsesa Booking'}
  				],
  				packages: [
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						priceValue: 1200000,
  						price: '1,200,000',
  						calPriceValue: 1200000,
  						calPrice: '1,200,000',
  						feature: [
  							{
  								icon: 'fa-close',
  								text: 'Không bao gồm bữa sáng',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-close',
  								text: 'Không hủy phòng, không điều chỉnh sau khi đặt',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-credit-card',
  								text: 'Thanh toán ngay',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							}
  						]
  					},
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						priceValue: 1500000,
  						price: '1,500,000',
  						calPriceValue: 1500000,
  						calPrice: '1,500,000',
  						feature: [
  							{
  								icon: 'fa-close',
  								text: 'Không bao gồm bữa sáng',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-close',
  								text: 'Không hủy phòng, không điều chỉnh sau khi đặt',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-credit-card',
  								text: 'Thanh toán ngay',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							}
  						]
  					},
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						priceValue: 1200000,
  						price: '1,300,000',
  						calPriceValue: 1300000,
  						calPrice: '1,300,000',
  						feature: [
  							{
  								icon: 'fa-close',
  								text: 'Không bao gồm bữa sáng',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-close',
  								text: 'Không hủy phòng, không điều chỉnh sau khi đặt',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							},
  							{
  								icon: 'fa-credit-card',
  								text: 'Thanh toán ngay',
  								detail: {
  									content: 'Trong trường hợp khách hàng không đến đúng hẹn thì toàn bộ số tiền dùng để đặt phòng vẫn được thành toán theo thông tin đặt phòng'
  								}
  							}
  						]
  					}
  				]
  			}
  		]
  	}

  	$scope.upGuestNum = function(type, index) {
  		var quan = null;
  		switch(type){
  			case 'adult':{
  				quan = $scope.csSearchParams.rooms[index].adult;
  				if (quan < 2) {
  					$scope.csSearchParams.rooms[index].adult += 1;
  				}
  			};break;
  			case 'child':{
  				quan = $scope.csSearchParams.rooms[index].childs.length;
  				if (quan < 2) {
  					$scope.csSearchParams.rooms[index].childs.push(1);
  				}
  			};break;
  			default: {}
  		}
  	}

  	$scope.downGuestNum = function(type, index) {
  		console.log(type, index);
  		var quan = null;
  		switch(type){
  			case 'adult':{
  				quan = $scope.csSearchParams.rooms[index].adult;
  				if (quan > 1) {
  					$scope.csSearchParams.rooms[index].adult -= 1;
  				}
  			};break;
  			case 'child':{
  				quan = $scope.csSearchParams.rooms[index].childs.length;
  				if (quan > 0) {
  					$scope.csSearchParams.rooms[index].childs.pop();
  				}
  			};break;
  			default: {}
  		}
  	}

  	$scope.upAge = function(roomIndex, childIndex){
  		var age = $scope.csSearchParams.rooms[roomIndex].childs[childIndex];
  		if (age < 12) {
 		 	$scope.csSearchParams.rooms[roomIndex].childs[childIndex] += 1;
  		}
  	}
  	$scope.downAge = function(roomIndex, childIndex){
  		var age = $scope.csSearchParams.rooms[roomIndex].childs[childIndex];
  		if (age > 1) {
 		 	$scope.csSearchParams.rooms[roomIndex].childs[childIndex] -= 1;
  		}
  	}

  	// Selecting package handling
  	$scope.selectPackage = function(e, roomInd, packInd){
  		e.preventDefault();
  		var csSearch = $scope.csSearchParams,
  			roomList = $scope.csRoomList;
  		for (var i = 0, len = csSearch.rooms.length; i < len; i++){
  			if (!csSearch.rooms[i].selected) {
  				csSearch.rooms[i].name = roomList.rooms[roomInd].name;
  				csSearch.rooms[i].package = roomList.rooms[roomInd].packages[packInd].name;
  				csSearch.rooms[i].calPrice = roomList.rooms[roomInd].packages[packInd].calPrice;
  				csSearch.rooms[i].selected = true;
  				console.log(csSearch);	
  				break;
  			}
  		}
  	};

  	$scope.unselectRoom = function(e, roomInd){
  		e.preventDefault();
  		$scope.csSearchParams.rooms[roomInd].selected = false;
  	}

  	console.log($scope.csSearchParams);
  }])
