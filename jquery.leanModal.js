(function($){
 
    $.fn.extend({ 
         
        leanModal: function(options) {
 
          var defaults = {
              overlay: 0.8,
              top: 10,
              closeButton: '.close'
          };

          var overlay = $('<div id="lean_overlay"></div>');

          $("body").append(overlay);

          options =  $.extend(defaults, options);

          var o = options, modal_id = $(this);

          overlay.click(function() {
               close_modal(modal_id);
          });

          $(o.closeButton).click(function() {
               close_modal(modal_id);
          });

          var modal_height = $(modal_id).outerHeight(),
              modal_width = $(modal_id).outerWidth();

          //$('body, html').css('overflow', 'hidden');

          overlay.fadeTo(300,o.overlay);

          top_pos = ($(window).height() / 2) - (modal_height / 2);
          $(modal_id).css({
              'position' : 'fixed',
              'z-index': 5000,
              'left' : 50 + '%',
              'margin-left' : - (modal_width / 2),
              'top' : (top_pos < 0) ? o.top : top_pos
          });

          $(modal_id).fadeTo(200,1);

          function close_modal(modal_id){
              overlay.fadeOut(400);
              $(modal_id).fadeOut(200);
              $('body, html').css('overflow', 'auto');
          }
    
        }
    });
     
})(jQuery);
