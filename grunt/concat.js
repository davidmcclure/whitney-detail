
/**
 * @package     omeka
 * @subpackage  neatline-Neatlight
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

module.exports = {

  dist: {
    dest: 'script.js',
    src: [
      'bower_components/nprogress/nprogress.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'assets/javascripts/**/*.js'
    ]
  }

};
