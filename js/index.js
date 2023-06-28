jQuery(document).ready(function()
  {
    setTimeout(function(){jQuery("body").click(function(){
      // console.log("hi");
      // $("#gate").css("-webkit-animation-play-state", "paused");
      // $("#gate").animate({width: "1800px"}, "slow");
      // $("#prompt").animate({opacity: "0%"}, "slow");


      // $("#gate").addClass('notransition'); // Disable transitions
      // $("#gate").animate({width: "1800px"}, "slow");
      // $("#gate").animate({width: "5000px"}, "slow");
      // $("#gate")[0].offsetHeight; // Trigger a reflow, flushing the CSS changes
      // $("#gate").removeClass('notransition'); // Re-enable transitions
      $("#white").animate({opacity: "100%"}, "slow");
      setTimeout('location.href="home.html"', 900);
  });}, 11000);
    
});
