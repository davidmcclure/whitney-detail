
/**
 * @package     omeka
 * @subpackage  whitney-overview
 * @copyright   2014 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.on('start', function() {

  var map = $('#neatline-map');

  var resize = function() {

    var h = $(window).height();
    var w = $(window).width();

    map.height(h).width(w);
    Neatline.execute('MAP:updateSize');

  };

  $(window).resize(_.debounce(resize, 500));
  resize();

});
