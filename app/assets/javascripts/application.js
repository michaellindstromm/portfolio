// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require_tree .

$(window).scroll(function() {

    var navbarHeight = $('#navbar').height();

    if ($(this).scrollTop() > $('.about-section').offset().top - navbarHeight * 3) {
        $('.navbar').removeClass('transparent-nav');
        $('.navbar').addClass('colored-nav');
    } else {
        $('.navbar').removeClass('colored-nav');
        $('.navbar').addClass('transparent-nav');
    }

});

$(window).on('load', function() {

    setTimeout(function() {

        $(".test-holder-image").fadeOut(2000);

        $(".test-holder-div").addClass("no-height");
        
        
        setTimeout(function() {
            $(".test-holder-image").hide();

            $(".nav-logo").fadeIn(2000);
        }, 1500);
        
        setTimeout(function() {
            $('#jumbo-name').removeClass('hideme');
            $('#jumbo-name').addClass('jumbo-name');
        }, 3000);
        
        setTimeout(function() {
            $('#jumbo-horizontal').removeClass('hideme');
            $('#jumbo-horizontal').addClass('jumbo-phrase');

            $('#jumbo-phrase').removeClass('hideme');
            $('#jumbo-phrase').addClass('jumbo-phrase');
        }, 4500);

        setTimeout(function() {
            // $('body').removeClass('stop-scrolling');
            $('body').unbind('touchmove')
            $('html, body').animate({ scrollTop: $('.about-section').offset().top - ($('#navbar').height() + $('#navbar').height() * .6)}, 2000);
        }, 6000);

        setTimeout(function() {
            $('.jumbo-arrow').removeClass('hideme');
            $('.jumbo-arrow').addClass('jumbo-phrase');
        }, 8000)

    }, 1000);

});


function ready() {
    $(document).ready(function() {

        $('body').bind('touchmove', function (e) { e.preventDefault() })
        
        $(".nav-logo").hide();
        $(".test-holder-div").hide();
        $(".test-holder-image").hide();

        
        $(".test-holder-div").show();
        $(".test-holder-image").show();

        $(this).scrollTop(0);

    });
}



function smoothScroll() {
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {

        var target = $(this.hash);

        if (target[0]["id"] == "about") {

            $('html, body').stop().animate({
                scrollTop: target.offset().top - 218
            }, 2000);
            return false;

        } else if (target[0]["id"] == "contact") {

            $('html, body').stop().animate({
                scrollTop: target.offset().top - 350
            }, 2000);
            return false;
            
        } else {
            
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 235
            }, 2000);
            return false;

        }

    });
}

// $('.about-down').on('click', function() {
//     $('html, body').animate({ scrollTop: $('.project-section').offset().top - ($('#navbar').height() + $('#navbar').height() * .5) }, 2000);
// });

setTimeout(smoothScroll, 0);
ready();



