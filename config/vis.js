
/**
 * @package     omeka
 * @subpackage  whitney-detail
 * @copyright   2014 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Vis', function(Vis) {


  Vis.config = {

    // Divide records on the timeline into groups, identified by the tags.
    groups: [
      { tag: 'track_travel',  title: 'Travel' },
      { tag: 'track_life',    title: 'Daily Life' },
      { tag: 'track_events',  title: 'Events' },
      { tag: 'track_art',     title: 'Art' },
      { tag: 'track_sites',   title: 'Sites' }
    ],

    padding: {

      // When centering around a span, multiply the width of the span by this
      // value to get the size of the padding around the span. For example, if
      // the span is 1 year, then this would set a 2-year gutter on each side
      // of the span when the exhibit focuses on its record.
      span: 2,

      // When centering around a point, set a gutter of this duration on each
      // side of the point.
      point: {
        value: 6,
        unit: 'months'
      }

    },

    stacking: {
      unit: 'days',
      duration: 10
    },

    options: {
      stack: false,
      zoomMin: 604800000,
      min: '1866-01-01',
      max: '1870-01-01'
    }

  };


});
