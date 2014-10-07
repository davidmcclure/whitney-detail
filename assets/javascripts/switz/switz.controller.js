
/**
 * @package     omeka
 * @subpackage  whitney-overview
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Switz', function(Switz) {


  Switz.Controller = Neatline.Shared.Controller.extend({


    slug: 'SWITZ',

    events: [
      'select'
    ],


    /**
     * Get the Switzerland map.
     */
    init: function() {
      this.layer = Neatline.Map.__controller.view.layers.wms[217];
      this.layer.setVisibility(false);
    },


    /**
     * Hide/show the Switzerland map.
     *
     * @param {Object} args
     */
    select: function(args) {
      this.layer = Neatline.Map.__controller.view.layers.wms[217];
      this.layer.setVisibility(args.model.hasTag('switz'));
    }


  });


});
