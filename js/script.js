$(document).ready(function() {

  'use strict';

  // ========================
  // For Fade-in effect
  // ========================

  $('html').removeClass('fade-out');

  // =================
  // Responsive videos
  // =================

  $('.post-content').fitVids();

  // ===============
  // Off Canvas menu
  // ===============

  $('.off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.off-canvas-container').toggleClass('is-active');
  });

  // Shows the number of search results.
  jQuery('#search-input').on('focus', function() {
    jQuery('.show-results-count').addClass('active');
    jQuery('.results-container').show();
  });

  // Hides the number of search results.
  jQuery(document).on('click focus', function(e) {
    if (jQuery(e.target).closest('#search-input').length === 0) {
      jQuery('.show-results-count').removeClass('active');
      jQuery('.results-container').hide();
    }
  });

});