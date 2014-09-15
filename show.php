<?php

/**
 * @package     omeka
 * @subpackage  whitney-detail
 * @copyright   2014 David McClure
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

?>

<?php echo head(array(
  'title' => nl_getExhibitField('title'),
  'bodyclass' => 'neatline show'
)); ?>

<!-- Exhibit. -->
<div class="exhibit">
  <?php echo nl_getExhibitMarkup(); ?>
</div>

<!-- Branding. -->
<div id="branding">
  <h1 class="brand">Anne Whitney Abroad, 1867-1868</h1>
  <h1 class="title">The First Sixteen Months</h1>
</div>

<!-- Zoom. -->
<div id="zoom"></div>

<?php echo foot(); ?>
