(function ($) {
  var mobileQuery = 'all and (max-width: 44em)';

  Drupal.behaviors.clinicalTrialHeights = {
    attach: function(context, settings) {
      if (!Modernizr.mq(mobileQuery)) {
        $('.l-content-modules-layout-a', context).once('content-modules', function() {
          $(this).find('.content-module').matchHeight();
        });
        $('.l-content', context).once('sidebar', function() {
          var $content = $(this);
          $content.imagesLoaded().always(function() {
            var $sidebar =  $('.l-region--sidebar-first');
            var contentHeight = $content.height();
            if (contentHeight > $sidebar.height()) {
              $sidebar.height(contentHeight);
            }
          });
        });
      }
    }
  };

  Drupal.behaviors.clinicalTrialMobileMenu = {
    attach: function(context, settings) {
      $(document).ready(function() {
          $('body').once('mobile-menu', function() {
            var $mobileMenu = $('#block-menu-menu-mobile-menu ul.menu');
            $mobileMenu.mmenu();
            $('#mobile-menu-btn').click(function() {
              $mobileMenu.trigger('open.mm');
            });
          });
        //}
      })
    }
  };
})(jQuery);
