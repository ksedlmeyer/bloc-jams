$(document).ready(function() { 
    $('.hero-content h3').click(function(){
      var subText = $(this).text();
       $(this).text(subText + "!");
    });
 
   var onHoverAction = function(event) {
     console.log('Hover action triggered.');
     $(this).animate({'margin-top': '10px'});
   };
 
   var offHoverAction = function(event) {
     console.log('Off-hover action triggered.');
     $(this).animate({'margin-top': '0px'});
   };
 
    $('.selling-points .point').hover(onHoverAction, offHoverAction);
    
    var onHoverAction = function(event) {
      console.log('Hover action triggered.');
      $(this).css({'color': '#7CFC00'});
    };

    var offHoverAction = function(event) {
      console.log('Off-hover action triggered.');
      $(this).css({'color': 'white'});
    };

    $('.hero-content h3').hover(onHoverAction, offHoverAction);

    $('.hero-content h1').click(function(){
      $(this).fadeOut('slow');
    });
  });