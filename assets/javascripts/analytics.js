// $(document).ready(function() {
//   var menu = $('#navigation-menu');
//   var menuToggle = $('#js-mobile-menu');
//   var signUp = $('.sign-up');

//   $(menuToggle).on('click', function(e) {
//     e.preventDefault();
//     menu.slideToggle(function(){
//       if(menu.is(':hidden')) {
//         menu.removeAttr('style');
//       }
//     });
//   });

//   // underline under the active nav item
//   $(".nav .nav-link").click(function() {
//     $(".nav .nav-link").each(function() {
//       $(this).removeClass("active-nav-item");
//     });
//     $(this).addClass("active-nav-item");
//     $(".nav .more").removeClass("active-nav-item");
//   });
// });

$(function(){
  // // grab the initial top offset of the navigation
  // 	var sticky_div = $("#sticky");
  //   var sticky_navigation_offset_top = sticky_div.offset().top;
     
  //   // our function that decides weather the navigation bar should have "fixed" css position or not.
  //   var sticky_navigation = function(){
  //       var scroll_top = $(window).scrollTop(); // our current vertical position from the top
         
  //       // if we've scrolled more than the navigation, change its position to fixed to stick to top,
  //       // otherwise change it back to relative
  //       if (scroll_top > sticky_navigation_offset_top) { 
  //           sticky_div.css({ 'position': 'fixed', 'top':0, 'left':0 });
  //       } else {
  //           sticky_div.css({ 'position': 'relative' }); 
  //       }   
  //   };
     
  //   // run our function on load
  //   sticky_navigation();
     
  //   // and run it again every time you scroll
  //   $(window).scroll(function() {
  //        sticky_navigation();
  //   });

    var offset = 220;
    var duration = 500;

    //animated scroll anchors
    $(".nav ul > li").localScroll({duration: duration});

    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })

    $(".navigation-menu-button").click(function(e) {
      e.preventDefault();
      $(this).toggleClass('open');
      var openclose = $(this).hasClass('open') ? 'Close' : 'Open';
      $(this).attr("title", openclose + ' Menu');
      $(this).hasClass('open') ?  $(".mobile-nav").slideDown("fast") : $(".mobile-nav").slideUp("fast");
    });
});



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54267334-1', 'auto');
ga('send', 'pageview');