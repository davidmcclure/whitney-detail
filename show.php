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
  <p class="tagline">A companion to Jacqueline Marie Musacchio, "<a href="http://www.19thc-artworldwide.org/index.php/autumn14/musacchio-introduction" target="_blank">Mapping the 'White, Marmorean Flock': Anne Whitney Abroad, 1867-1868</a>," Nineteenth-Century Art Worldwide 13, no. 2 (2014).</p>
</div>

<!-- Bubble. -->
<div id="static-bubble" class="widget"></div>

<!-- Zoom. -->
<div id="zoom"></div>

<?php echo foot(); ?>
