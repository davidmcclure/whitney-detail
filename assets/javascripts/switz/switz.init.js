
/**
 * @package     omeka
 * @subpackage  whitney-overview
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Switz', function(Switz) {


  Neatline.vent.once('MAP:ingest', function() {
    Switz.__controller = new Neatline.Switz.Controller();
  });


});
