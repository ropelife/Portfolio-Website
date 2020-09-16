
// alert("yo");
$(document).on("click","#homeitem", function () {
	$('html,body').animate({
        scrollTop: $("#page1").offset().top
	}, 'slow');
});

$(document).on("click","#skillsitem", function () {
	$('html,body').animate({
        scrollTop: $("#page2").offset().top
	}, 1000);
});

$(document).on("click","#experienceitem", function () {
	$('html,body').animate({
        scrollTop: $("#page3").offset().top
	}, 1000);
});

//navbar shadow
$(document).ready(function () {
	$(window).scroll(function(){
	    if ($(window).scrollTop() > $('#navdiv').height()) {
	       $('#navdiv').addClass('nav-shadow');
	       console.log("added");
	    }
	    else {
	       $('#navdiv').removeClass('nav-shadow');
	        console.log("removed");
	    }
	});
});

$(document).ready(function () {
	$(window).resize(function() {
		if($(window).width() < 770)
		{
			console.log("wid");
			$("#menu").hide();
		}
		else
		{
			$("#menu").show();
		}
	});
});

// Sticky navbar
// =========================
$(document).ready(function () {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});

$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});
