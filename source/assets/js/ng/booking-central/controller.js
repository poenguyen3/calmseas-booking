angular.module('calm-booking')
  .controller('booking-central', ['$scope', '$sce', 'booking', function($scope, $sce, booking){

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


    $scope.couponApply = {
      code: 'CSS2015',
      type: 'priceoff',
      value: 30
    };
    $scope.price = {
      totalOff: 0
    };

    $scope.coupon = '';

    booking.send($scope.csSearchParams);
  	$scope.csExtraList = {
  		extras: [
        {
          name: 'Ẩm thực',
          id: 1,
          list: [
                  {
                    ind: 0,
                    forPack: ['gg2', 'gg3', 'gg4', 'gg5'],
                    img: 'images/photos/bar4.jpg',
                    name: 'Bữa tối buffet BBQ',
                    detail: '<p>Tận hưởng bữa ăn tối độc đáo với nhiều món ăn đặc sản và đầy hương vị</p><p>Thời điểm diễn ra: 6 giờ tối</p>',
                    selected: 0,
                    before_price: 2000000,
                    price: 1300000,
                    selected: false,
                  },
                  {
                    ind: 1,
                    forPack: ['gg1', 'gg2', 'gg3', 'gg4', 'gg5'],
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
                    forPack: ['gg1', 'gg2', 'gg3', 'gg4', 'gg5'],
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
                    forPack: ['gg1', 'gg2', 'gg3', 'gg4', 'gg5'],
                    img: 'images/photos/bar4.jpg',
                    name: 'Bữa tối buffet BBQ',
                    detail: '<p>Tận hưởng bữa ăn tối độc đáo với nhiều món ăn đặc sản và đầy hương vị</p><p>Thời điểm diễn ra: 6 giờ tối</p>',
                    selected: 0,
                    before_price: 2000000,
                    price: 1300000,
                    selected: false
                  }
          ]
        },
        {
          name: 'Thư giãn',
          id: 1,
          list: [
                  {
                    ind: 0,
                    forPack: ['gg1', 'gg2', 'gg3', 'gg4', 'gg5'],
                    img: 'images/photos/beach1.jpg',
                    name: 'Khu bãi biển cá nhân',
                    detail: '<p>Tận hưởng bữa ăn tối độc đáo với nhiều món ăn đặc sản và đầy hương vị</p><p>Thời điểm diễn ra: 6 giờ tối</p>',
                    selected: 0,
                    before_price: 2000000,
                    price: 1300000,
                    selected: false,
                  },
                  {
                    ind: 1,
                    forPack: ['gg1', 'gg2', 'gg3', 'gg4', 'gg5'],
                    img: 'images/photos/beach1.jpg',
                    name: 'Khu bãi biển cá nhân',
                    detail: '<p>Tận hưởng bữa ăn tối độc đáo với nhiều món ăn đặc sản và đầy hương vị</p><p>Thời điểm diễn ra: 6 giờ tối</p>',
                    selected: 0,
                    before_price: 2000000,
                    price: 1300000,
                    selected: false
                  },
          ]
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
  						id: 'gg1',
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
  						id: 'gg2',
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
  						id: 'gg3',
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
  						id: 'gg4',
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
  						id: 'gg5',
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
  						id: 'gg6',
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
  						id: 'gg7',
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
  						id: 'gg8',
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
  						id: 'gg9',
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

    $scope.changeExtra = function(extras){
      console.log(extras);
    }

    $scope.extraUp = function(extra){
      extra.num++;
    };

    $scope.extraDown = function(extra){
      if (extra.num > 1) {
        extra.num--;
      }
    };

    $scope.applyExtras = function(packInd){
      var appliedExtras = [],
          extras = $scope.csExtraList.extras;
      extras.forEach(function(group){
        var tempExtras = [];
        group.list.forEach(function(extra){
          console.log(packInd, extra.forPack.indexOf(packInd));
          if (extra.forPack.indexOf(packInd) != -1) {
            tempExtras.push($.extend(true, {}, extra, {
              additionReq: '',
              num: 1
            } ));
          }
        });
        if (tempExtras.length) {
          appliedExtras.push({
            name: group.name,
            list: tempExtras
          });
        }
      });
      return appliedExtras;
    };

  	// Selecting package handling
  	$scope.selectRoom = function(e, packInd, roomInd){
      var csSearch = $scope.csSearchParams,
          room = $scope.csRoomList.rooms[roomInd],
          pack = room.packages[packInd],
          maxRoom = csSearch.maxRoomSelected,
          roomInfo = null,
          packInfo = null,
          checkRoom = null,
          extras = null;
      if (csSearch.roomSelected < maxRoom) {
        room.remain--;
        pack.selected++;
        csSearch.roomSelected++;
        checkRoom = $scope.checkSelectedRoom(roomInd, packInd);
        if (!checkRoom) {
          roomInfo = {
            roomName: room.name,
            pic: room.imgs[0]
          };
          packInfo = {
            packName: pack.name,
            packID: pack.id,
            price: pack.price
          };
          extras = {
            extras: $scope.applyExtras(pack.id)
          };
          roomObj = $.extend(true, {
            id: roomInd + '-' + packInd,
            num: 1
          }, roomInfo, packInfo, extras);
          csSearch.rooms.push(roomObj);
          console.log(csSearch.rooms);
        } else {
          checkRoom.num++;
        }
      } else {
        alert('Hiện tại quý khách chỉ có thể đặt tối đa ' + maxRoom + ' phòng.')
      }
      console.log(roomInfo);
  	};

    $scope.multiNightText = function(){
      var nightNum = $scope.csSearchParams.nightNum;
      return (nightNum > 1) ? ('x ' + nightNum) : '';
    };

    $scope.multiRoomText = function(roomInd){
      var roomNum = $scope.csSearchParams.rooms[roomInd].num;
      return (roomNum > 1) ? ('x ' + roomNum) : '';
    };

    $scope.multiExtraText = function(extra){
      if (extra.num > 1) {
        return 'x' + extra.num;
      }
      return '';
    }

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
          console.log(i);
          if (selectedRooms[i].id === checkID) {
            rooms[roomInd].remain++;
            selectedRooms[i].num--;
            if (!selectedRooms[i].num) {
              console.log(selectedRooms[i].num, i);
              selectedRooms.splice(i, 1);
              i--;len--;
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
        rooms[i].extras.forEach(function(group){
          group.list.forEach(function(extra){
            if (extra.selected) {
              total += extra.price * extra.num;
            }
          });
        });
      }
      // add VAT
      total += total * 10 / 100;
      total *= 1 - $scope.price.totalOff;
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

    $scope.toggleExtra = function(e, extra){
      e.preventDefault();
      extra.selected = !extra.selected;
    }

    $scope.checkSelectedExtra = function(id, groupID, packID){
      return false;
    };

    $scope.getPriceSelectedExtra = function(){
    	var total = 0,
    		  rooms = $scope.csSearchParams.rooms;
      rooms.forEach(function(room){
        room.extras.forEach(function(group){
          group.list.forEach(function(extra){
            if (extra.selected) {
              total += extra.price * extra.num;
            }
          });
        });
      });
    	return total;
    }

    $scope.checkExtraForPack = function(packID, extras){
      var showGroup = false;
      extras.forEach(function(extra, i){
        if (showGroup) {
          return;
        }
        if (extra.forPack.indexOf(packID) > -1) {
          showGroup = true;
        }
      });
      return showGroup;
    }

    $scope.addRoom = function(e){
      e.preventDefault();
      if (!$scope.isFullRoom()) {
        $scope.csSearchParams.rooms.push($.extend(true, {}, roomTemplate));
      }
    }

    $scope.checkCoupon = function(){  
      if ($scope.coupon.toUpperCase() === $scope.couponApply.code) {
        $scope.applyCoupon($scope.couponApply);
      }
    };
    $scope.applyCoupon = function(coupon){
      switch (coupon.type){
        case 'priceoff':{
          $scope.price.totalOff = 0.3;
        }break;
      }
    }

    $scope.selectedItem = function(item){
    	return item.selected;
    }
  	console.log($scope.csSearchParams);
  }]);
