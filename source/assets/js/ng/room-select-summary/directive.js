angular.module('calm-booking')
  .directive('roomSelectSummary', function(){
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {
        var win = $(window);

        function setOriginOffset() {
          elm.attr('style', '');
          elm.data('origin-top', elm.offset().top);
          elm.data('origin-left', elm.offset().left);
          win.trigger('scroll.setSummaryOffset');
        }
        win.on('resize', function(){
          setOriginOffset();
        })
        setOriginOffset();

      	scope.toggleDetail = function(e, id) {
      		e.preventDefault();
          $(e.currentTarget).find('.fa').toggleClass('fa-caret-down').toggleClass('fa-caret-up');
      		$('#' + id).slideToggle();
      		return false;
      	};

        function setSummaryMaxHeight() {
          var padding = 40,
              totalHeadH = elm.find('.total').outerHeight(),
              bookBtnH = elm.find('.book-button').outerHeight(),
              winH = win.outerHeight();
          elm.find('.summary-content-container')
              .css('max-height', winH - padding - totalHeadH - bookBtnH);
        }
        win.on('resize.summary', function(){
          setSummaryMaxHeight();
        });
        setSummaryMaxHeight();


        win.on('scroll.setSummaryOffset', function(){
          if (!elm.find('.summary-brief').is(':visible')) {
            if (win.scrollTop() > parseInt(elm.data('origin-top'))){
              elm.css({
                position: 'fixed',
                top: 10,
                marginTop: 0,
                left: elm.data('origin-left')
              });
            } else {
              elm.attr('style', '');
            }
          }
        });

        scope.nextStep = function(e){
          e.preventDefault();
          var navScope = angular.element('header.cs-header').scope();
          if ($('.step-nav.step-1').hasClass('active')) {
            navScope.goToStep2(e);
          } else {
            navScope.goToStep3(e);
          }
        }

        scope.showUpSummary = function(e){
          var target = $(e.currentTarget).find('.fa');
          target.toggleClass('fa-caret-down');
          target.toggleClass('fa-caret-up');
          elm.find('.summary-content').slideToggle();
        }
      }
  }
});
