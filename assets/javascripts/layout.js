
/**
 * @package     omeka
 * @subpackage  whitney-overview
 * @copyright   2014 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.on('start', function() {

  var resize = function() {

    // Set the timeline height.
    Neatline.execute('VIS:setOptions', {
      height: $(window).height()
    });

    // Resize the map.
    Neatline.execute('MAP:updateSize');

  };

  $(window).resize(resize);
  resize();

});

