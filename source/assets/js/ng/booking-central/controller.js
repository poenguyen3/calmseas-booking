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
      maxRoomSelected: 5,
    	selectingRoom: 0,
  		rooms: []
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
  				selected: 0,
          before_price: 2000000,
          price: 1300000,
  				selected: false
  			},
  			{
  				ind: 1,
  				img: 'images/photos/bar4.jpg',
  				name: 'Bữa tối buffet BBQ',
  				detail: '<p>Tận hưởng bữa ăn tối độc đáo với nhiều món ăn đặc sản và đầy hương vị</p><p>Thời điểm diễn ra: 6 giờ tối</p>',
  				selected: 0,
          before_price: 2000000,
          price: 1300000,
  				selected: false
  			},
  			{
  				ind: 2,
  				img: 'images/photos/bar4.jpg',
  				name: 'Bữa tối buffet BBQ',
  				detail: '<p>Tận hưởng bữa ăn tối độc đáo với nhiều món ăn đặc sản và đầy hương vị</p><p>Thời điểm diễn ra: 6 giờ tối</p>',
  				selected: 0,
          before_price: 2000000,
          price: 1300000,
  				selected: false
  			},
  			{
  				ind: 3,
  				img: 'images/photos/bar4.jpg',
  				name: 'Bữa tối buffet BBQ',
  				detail: '<p>Tận hưởng bữa ăn tối độc đáo với nhiều món ăn đặc sản và đầy hương vị</p><p>Thời điểm diễn ra: 6 giờ tối</p>',
  				selected: 0,
          before_price: 2000000,
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
          remain: 5,
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
  						selected: 0,
              before_price: 2000000,
              price: 1200000,
              maxocc: {
                adult: 2,
                child: 2
              },
              specs: [
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                }
              ],
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
  						selected: 0,
              before_price: 2000000,
              price: 1500000,
  						maxocc: {
                adult: 2,
                child: 2
              },
              specs: [
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                }
              ],
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
  						selected: 0,
              before_price: 2000000,
              price: 1300000,
  						maxocc: {
                adult: 2,
                child: 2
              },
              specs: [
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                }
              ],
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
          remain: 5,
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
  						selected: 0,
              before_price: 2000000,
              price: 1200000,
  						maxocc: {
                adult: 2,
                child: 2
              },
              specs: [
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                }
              ],
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
  						selected: 0,
              before_price: 2000000,
              price: 1200000,
  						maxocc: {
                adult: 2,
                child: 2
              },
              specs: [
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                }
              ],
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
  						selected: 0,
              before_price: 2000000,
              price: 1200000,
  						maxocc: {
                adult: 2,
                child: 2
              },
              specs: [
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                }
              ],
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
          remain: 5,
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
  						selected: 0,
              before_price: 2000000,
              price: 1200000,
  						maxocc: {
                adult: 2,
                child: 2
              },
              specs: [
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                }
              ],
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
  						selected: 0,
              before_price: 2000000,
              price: 1200000,
  						maxocc: {
                adult: 2,
                child: 2
              },
              specs: [
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                }
              ],
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
  						selected: 0,
              before_price: 2000000,
              price: 1200000,
  						maxocc: {
                adult: 2,
                child: 2
              },
              specs: [
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                },
                {
                  title: 'Có giường thêm'
                }
              ],
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

    // Check selected room
    $scope.checkSelectedRoom = function(roomInd, packInd){
      var selectedRooms = $scope.csSearchParams.rooms,
          len = selectedRooms.length,
          checkID = roomInd + '-' + packInd;
      for (var i = 0; i < len; i++){
        if (selectedRooms[i].id === checkID) {
          return selectedRooms[i];
        }
      }
      return false;
    };

  	// Selecting package handling
  	$scope.selectRoom = function(e, packInd, roomInd){
      var csSearch = $scope.csSearchParams,
          room = $scope.csRoomList.rooms[roomInd],
          pack = room.packages[packInd],
          maxRoom = csSearch.maxRoomSelected,
          roomInfo = null,
          packInfo = null,
          checkRoom = null;
      if (csSearch.roomSelected < maxRoom) {        
        room.remain--;
        pack.selected++;
        csSearch.roomSelected++;
        checkRoom = $scope.checkSelectedRoom(roomInd, packInd);
        if (!checkRoom) {
          roomInfo = {
            roomName: room.name
          };
          packInfo = {
            packName: pack.name,
            price: pack.price
          };          
          roomObj = $.extend(true, {
            id: roomInd + '-' + packInd,
            num: 1
          }, roomInfo, packInfo);
          csSearch.rooms.push(roomObj);
        } else {
          checkRoom.num++;
        }
      } else {
        alert('Hiện tại quý khách chỉ có thể đặt tối đa ' + maxRoom + ' phòng.')
      }
  	};

    $scope.multiNightText = function(){
      var nightNum = $scope.csSearchParams.nightNum;
      return (nightNum > 1) ? ('x ' + nightNum) : '';
    };

    $scope.multiRoomText = function(roomInd){
      var roomNum = $scope.csSearchParams.rooms[roomInd].num;
      return (roomNum > 1) ? ('x ' + roomNum) : '';
    };

  	$scope.unselectRoom = function(e, packInd, roomInd){
  		e.preventDefault();
      var csSearch = $scope.csSearchParams,
          rooms = $scope.csRoomList.rooms,
          selectedRooms = csSearch.rooms,
          checkID = roomInd + '-' + packInd;
      if (rooms[roomInd].packages[packInd].selected > 0) {
        rooms[roomInd].packages[packInd].selected--;
        csSearch.roomSelected--;
        for (var i = 0, len = selectedRooms.length; i < len; i++){
          if (selectedRooms[i].id === checkID) {
            rooms[roomInd].remain++;
            selectedRooms[i].num--;
            if (!selectedRooms[i].num) {
              selectedRooms.splice(i, 1);
            }
          }
        }
      }
  	};

    $scope.removeRoom = function(e, checkID){
      var csSearch = $scope.csSearchParams,
          selectedRooms = csSearch.rooms,
          checkIDcom = checkID.split('-'),
          room = $scope.csRoomList.rooms[checkIDcom[0]],
          pack = room.packages[checkIDcom[1]],
          num = 0;
      e.preventDefault();
      for (var i = 0, len = selectedRooms.length; i < len; i++){
        if (selectedRooms[i].id === checkID) {
          num = selectedRooms[i].num;
          room.remain += num;
          pack.selected = 0;
          csSearch.roomSelected -= num;
          selectedRooms.splice(i, 1);
          len--;
          i--;
        }
      }
    };

    // Calculate money amount
    $scope.getTotalSelectedPrice = function(){
      var csSearchParams = $scope.csSearchParams,
      	  extras = $scope.csExtraList.extras,
          rooms = csSearchParams.rooms,
          total = 0;
      for (var i = 0,len = rooms.length; i < len; i++) {
        total += rooms[i].price * rooms[i].num * csSearchParams.nightNum;
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
          rooms = searchParams.rooms,
          nightPriceArray = [],
          nightNum = searchParams.nightNum,
          pricePernight = 0;
      for (var i = 0, len = searchParams.nightNum; i < len; i++) {
        for (var j = 0, plen = rooms.length; j < plen; j++) {
          pricePernight += rooms[j].price * rooms[j].num
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

    $scope.selectedItem = function(item){
    	return item.selected;
    }
  	console.log($scope.csSearchParams);
  }])
