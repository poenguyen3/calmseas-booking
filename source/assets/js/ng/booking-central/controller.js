angular.module('calm-booking')
  .controller('booking-central', ['$scope', '$sce', function($scope, $sce){
  	var today = new Date(),
  		nextDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  		todayFm = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
  		nextDateFm = nextDate.getDate() + '-' + (nextDate.getMonth() + 1) + '-' + nextDate.getFullYear(),
      roomTemplate = {
        selected: false,
        adult: 1,
        childs: []
      };
  	$scope.labels = {
  		validateBtnText: 'Đặt phòng'
  	};
  	$scope.csSearchParams = {
  		checkin: todayFm,
  		checkout: nextDateFm,
  		nightNum: 1,
      	roomSelected: 0,
      	selectingRoom: 0,
  		rooms: [
  			{
          selected: false,
          adult: 1,
          childs: []
  			}
  		]
  	};
  	$scope.confirm = {
  		rooms: []
  	};
  	$scope.csExtraList = {
  		extras: [
  			{
  				ind: 0,
  				img: 'images/photos/bar4.jpg',
  				name: 'Bữa tối buffet BBQ',
  				detail: '<p>Tận hưởng bữa ăn tối độc đáo với nhiều món ăn đặc sản và đầy hương vị</p><p>Thời điểm diễn ra: 6 giờ tối</p>',
  				price: 1300000,
  				selected: false
  			},
  			{
  				ind: 1,
  				img: 'images/photos/bar4.jpg',
  				name: 'Bữa tối buffet BBQ',
  				detail: '<p>Tận hưởng bữa ăn tối độc đáo với nhiều món ăn đặc sản và đầy hương vị</p><p>Thời điểm diễn ra: 6 giờ tối</p>',
  				price: 1300000,
  				selected: false
  			},
  			{
  				ind: 2,
  				img: 'images/photos/bar4.jpg',
  				name: 'Bữa tối buffet BBQ',
  				detail: '<p>Tận hưởng bữa ăn tối độc đáo với nhiều món ăn đặc sản và đầy hương vị</p><p>Thời điểm diễn ra: 6 giờ tối</p>',
  				price: 1300000,
  				selected: false
  			},
  			{
  				ind: 3,
  				img: 'images/photos/bar4.jpg',
  				name: 'Bữa tối buffet BBQ',
  				detail: '<p>Tận hưởng bữa ăn tối độc đáo với nhiều món ăn đặc sản và đầy hương vị</p><p>Thời điểm diễn ra: 6 giờ tối</p>',
  				price: 1300000,
  				selected: false
  			}
  		],
  		specialRequest: ''
  	};
  	$scope.csRoomList = {
  		rooms: [
  			{
  				name: 'Standard Room',
  				imgs: [
            {src:'images/photos/standar1.jpg', alt: 'Calmsesa Booking'},
            {src:'images/photos/standar1.jpg', alt: 'Calmsesa Booking'},
  					{src:'images/photos/standar1.jpg', alt: 'Calmsesa Booking'}
  				],
          feature: [
            {
              icon: 'check',
              text: 'Không gian dễ chịu'
            },
            {
              icon: 'check',
              text: 'Wifi miễn phí'
            },
            {
              icon: 'check',
              text: 'Góc nhìn ra biển'
            }
          ],
          maxocc: {
            total: 4,
            adult: 2,
            child: 2
          },
          mainbrief: 'Loại phòng sang trọng và quý phái nhất của khách sạn. Nhất định sẽ mang lại cho quý khách cảm giác thoải mái.',
          briefs: [
            {
              title: 'Các đáp ứng kĩ thuật số',
              icon: '',
              text: 'TV LCD màn hình rộng, tốc độ truy cập internet mạnh mẽ'
            },
            {
              title: 'Các tiện nghi khác',
              icon: '',
              text: 'Máy điều hòa, ...'
            },
            {
              title: 'Các tùy chọn giường nằm',
              icon: '',
              text: 'Giường đơn, giường đôi'
            }
          ],
  				packages: [
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						price: 1200000,
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
  						price: 1500000,
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
  						price: 1300000,
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
            {src:'images/photos/double1.jpg', alt: 'Calmsesa Booking'},
            {src:'images/photos/double1.jpg', alt: 'Calmsesa Booking'},
  					{src:'images/photos/double1.jpg', alt: 'Calmsesa Booking'}
  				],
          feature: [
            {
              icon: 'check',
              text: 'Không gian dễ chịu'
            },
            {
              icon: 'check',
              text: 'Wifi miễn phí'
            },
            {
              icon: 'check',
              text: 'Góc nhìn ra biển'
            }
          ],
          maxocc: {
            total: 4,
            adult: 2,
            child: 2
          },
          mainbrief: 'Loại phòng sang trọng và quý phái nhất của khách sạn. Nhất định sẽ mang lại cho quý khách cảm giác thoải mái.',
          briefs: [
            {
              title: 'Các đáp ứng kĩ thuật số',
              icon: '',
              text: 'TV LCD màn hình rộng, tốc độ truy cập internet mạnh mẽ'
            },
            {
              title: 'Các tiện nghi khác',
              icon: '',
              text: 'Máy điều hòa, ...'
            },
            {
              title: 'Các tùy chọn giường nằm',
              icon: '',
              text: 'Giường đơn, giường đôi'
            }
          ],
  				packages: [
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						price: 1200000,
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
  						price: 1200000,
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
  						price: 1200000,
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
            {src:'images/photos/suite1.jpg', alt: 'Calmsesa Booking'},
            {src:'images/photos/suite1.jpg', alt: 'Calmsesa Booking'},
            {src:'images/photos/suite1.jpg', alt: 'Calmsesa Booking'},
            {src:'images/photos/suite1.jpg', alt: 'Calmsesa Booking'},
  					{src:'images/photos/suite1.jpg', alt: 'Calmsesa Booking'}
  				],
          feature: [
            {
              icon: 'check',
              text: 'Không gian dễ chịu'
            },
            {
              icon: 'check',
              text: 'Wifi miễn phí'
            },
            {
              icon: 'check',
              text: 'Góc nhìn ra biển'
            }
          ],
          maxocc: {
            total: 4,
            adult: 2,
            child: 2
          },
          mainbrief: 'Loại phòng sang trọng và quý phái nhất của khách sạn. Nhất định sẽ mang lại cho quý khách cảm giác thoải mái.',
          briefs: [
            {
              title: 'Các đáp ứng kĩ thuật số',
              icon: '',
              text: 'TV LCD màn hình rộng, tốc độ truy cập internet mạnh mẽ'
            },
            {
              title: 'Các tiện nghi khác',
              icon: '',
              text: 'Máy điều hòa, ...'
            },
            {
              title: 'Các tùy chọn giường nằm',
              icon: '',
              text: 'Giường đơn, giường đôi'
            }
          ],
  				packages: [
  					{
  						name: 'GÓI KHÔNG BỮA SÁNG',
  						price: 1200000,
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
  						price: 1200000,
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
  						price: 1200000,
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
            console.log(quan);
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
      $scope.csSearchParams.roomSelected++;
  		for (var i = 0, len = csSearch.rooms.length; i < len; i++){
  			if (!csSearch.rooms[i].selected) {
  				csSearch.rooms[i].name = roomList.rooms[roomInd].name;
  				csSearch.rooms[i].package = roomList.rooms[roomInd].packages[packInd].name;
  				csSearch.rooms[i].price = roomList.rooms[roomInd].packages[packInd].price;
  				csSearch.rooms[i].selected = true;
          $scope.csSearchParams.selectingRoom = i + 1;
  				return;
  			}
  		}
      alert('Hiện tại hệ thống chỉ cho phép đặt tối đa một lúc 3 phòng! Mong quý khách thông cảm');
  	};

  	$scope.unselectRoom = function(e, roomInd){
  		e.preventDefault();
      var rooms = $scope.csSearchParams.rooms,
          len = rooms.length - 1,
          lastRoom = true,
          selectingRoom = roomInd;
      $scope.csSearchParams.roomSelected--;
      console.log(roomInd);
      if (roomInd < 2) {
        for (var i = roomInd; i < len; i++){
          if (rooms[i+1].selected) {
            $scope.csSearchParams.rooms[i] = $.extend(true, {}, rooms[i+1]);
            $scope.csSearchParams.rooms[i+1].selected = false;
            lastRoom = false;
            selectingRoom = i + 1;
          }
        }
        $scope.csSearchParams.selectingRoom = selectingRoom;
        if (!lastRoom) {
          return;
        }
      }
  		rooms[roomInd].selected = false;
  	}

    // Calculate money amount
    $scope.getTotalSelectedPrice = function(){
      var csSearchParams = $scope.csSearchParams,
      	  extras = $scope.csExtraList.extras,
          rooms = csSearchParams.rooms,
          total = 0;
      for (var i = 0,len = rooms.length; i < len; i++) {
        if (rooms[i].selected) {
          total += rooms[i].price * csSearchParams.nightNum;
        }
      }
      for (var i = 0, len = extras.length; i < len; i++){
      	if (extras[i].selected) {
      		total += extras[i].price;
      	}
      }
      return total;
    };

    $scope.getNightPrice = function(){
      var searchParams = $scope.csSearchParams,
          nightPriceArray = [],
          nightNum = searchParams.nightNum,
          pricePernight = 0;
      for (var i = 0, len = searchParams.nightNum; i < len; i++) {
        for (var j = 0, plen = searchParams.rooms.length; j < plen; j++) {
          console.log(searchParams.rooms[j].selected);
          if (searchParams.rooms[j].selected) {
            pricePernight += searchParams.rooms[j].price
          }
        }
        nightPriceArray.push(pricePernight);
        pricePernight = 0;
      }
      return nightPriceArray;
    };

    // Showing detail popup
    $scope.showPopDetail = function(ind){
      $('#pop-room-detail-' + ind)
        .addClass('active')
        .fadeIn({
          duration: 'normal',
          easing: 'easeOutQuart'
        });
    }

    // Get details
    $scope.getExtraDetail = function(ind) {
    	return $sce.trustAsHtml($scope.csExtraList.extras[ind].detail);
    }
    $scope.toggleExtra = function(e, ind){
    	e.preventDefault();
    	$scope.csExtraList.extras[ind].selected = !$scope.csExtraList.extras[ind].selected;
    }
    $scope.getPriceSelectedExtra = function(){
    	var total = 0,
    		extra = $scope.csExtraList.extras;
    	for (var i = 0, len = extra.length; i < len; i++){
    		if (extra[i].selected) {
    			total += extra[i].price;
    		}
    	}
    	return total;
    }

    $scope.isFullRoom = function(){
      if ($scope.csSearchParams.rooms.length < 3) {
        return false;
      }
      return true;
    };

    $scope.addRoom = function(e){
      e.preventDefault();
      if (!$scope.isFullRoom()) {
        $scope.csSearchParams.rooms.push($.extend(true, {}, roomTemplate));
      }
    }

    $scope.removeRoom = function(e){
      e.preventDefault();
      if ($scope.csSearchParams.rooms.length > 1) {
        $scope.csSearchParams.rooms.pop();
      }
    }


    $scope.selectedItem = function(item){
    	return item.selected;
    }
  	console.log($scope.csSearchParams);
  }])
