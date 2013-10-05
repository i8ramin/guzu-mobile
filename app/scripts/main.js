(function ($) {
  var touchEvent = Modernizr.touch ? 'tap' : 'click';
  var scrolled = false;

  // var snapper = new Snap({
  //   element: $('#main')[0],
  //   disable: 'right',
  //   touchToDrag: false
  // });

  // $(document).on(touchEvent, '[trigger]', function (e) {
  //   var snapperState = snapper.state();
  //   snapperState.state === 'closed' ? snapper.open('left') : snapper.close();
  // });

  $(document).on('touchstart', '[tap]', function (e) {
    $(this).addClass('tapped');
  });
  $(document).on('touchend', '[tap]', function (e) {
    $(this).removeClass('tapped').toggleClass('active');
  });
  $(document).on('touchstart', function (e) {
    $(this).find('[tap]').removeClass('active');
  });

  // $(document).on(touchEvent, '[tap]', function (e) {
  //   var el = $(this);
  //   var href = el.attr('tap');
  // });

  $(document).on(touchEvent, '[select] label', function () {
    var label = $(this);
    var selectParent = label.parents('[select]');

    selectParent.find('label.selected').removeClass('selected');
    label.addClass('selected');
  });

})(Zepto);
