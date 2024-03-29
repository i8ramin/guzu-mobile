(function ($) {
  var touchEvent = Modernizr.touch ? 'tap' : 'click';
  var scrolling = false;
  var activeElem = false;
  var tapTimer;

  // var snapper = new Snap({
  //   element: $('#main')[0],
  //   disable: 'right',
  //   touchToDrag: false
  // });

  // $(document.body).on(touchEvent, '[trigger]', function (e) {
  //   var snapperState = snapper.state();
  //   snapperState.state === 'closed' ? snapper.open('left') : snapper.close();
  // });

  $(document.body).on('mousedown touchstart', '[tap]', function (e) {
    var tapElem = $(this);

    tapTimer = setTimeout(function () {
      tapElem.addClass('tapped');
    }, 100);
  });

  $(document.body).on('mouseup touchend', '[tap]', function (e) {
    e.preventDefault();

    var tapElem = $(this);
    var isLink = tapElem.is('a');

    clearTimeout(tapTimer);

    if (!tapElem.hasClass('tapped') && !scrolling) {
      tapElem.addClass('tapped');
    }

    tapTimer = setTimeout(function () {
      tapElem.removeClass('tapped');
    }, 150);

    if (!scrolling) {
      if (isLink) {
        location.href = tapElem.attr('href');
        return;
      }

      if (activeElem && (activeElem[0] === tapElem[0])) {
        activeElem.toggleClass('active');
        activeElem.css("z-index", 1); // force re-flow
      } else {
        if (activeElem) {
          activeElem.removeClass('active');
          activeElem = false;
        }

        activeElem = tapElem;
        activeElem.addClass('active');
        activeElem.css("z-index", 1); // force re-flow
      }
    }
  });

  $(document.body).on('mousemove touchmove', '[tap]', function (e) {
    var tapElem = $(this);
    tapElem.removeClass('tapped');
  });

  // $(document.body).on('click', '[tap]', function (e) {
  //   e.preventDefault();
  // });

  // scroll detection
  $(document.body).on('touchmove', function (e) {
    scrolling = true;
  });
  $(window).on('scroll', function (e) {
    scrolling = false;
  });

  // $(document.body).on(touchEvent, '[tap]', function (e) {
  //   var el = $(this);
  //   var href = el.attr('tap');
  // });

  $(document.body).on(touchEvent, '[select] label', function () {
    var label = $(this);
    var labelRef = label.data('ref');
    var selectParent = label.parents('[select]');

    selectParent.find('label.selected').removeClass('selected');
    label.addClass('selected');

    if (labelRef) {
      selectParent.find('.help-text').hide();
      selectParent.find('.' + labelRef).show();
    }


  });

})(Zepto);
