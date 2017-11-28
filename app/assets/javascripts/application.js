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

    if ($(this).scrollTop() > $('.about-section').offset().top - navbarHeight * 2 && $(this).scrollTop() < $('.jumbotron2').offset().top) {
        $('.navbar').removeClass('transparent-nav');
        $('.navbar').addClass('colored-nav');
    } else if ($(this).scrollTop() > $('.project-section').offset().top - navbarHeight * 1.5) {
        $('.navbar').removeClass('transparent-nav');
        $('.navbar').addClass('colored-nav');
    } else {
        $('.navbar').removeClass('colored-nav');
        $('.navbar').addClass('transparent-nav');
    }
    
    if ($(this).scrollTop() > $('.about-section').offset().top + ($('.about-section').height() - $('.about-section').height() * .25)) {

        $('#jumbo2-saying').removeClass('hideme');
        $('#jumbo2-horizontal').removeClass('hideme');
        $('#jumbo2-quoter').removeClass('hideme');
    
        $('#jumbo2-saying').addClass('jumbo-phrase');
        $('#jumbo2-horizontal').addClass('jumbo-phrase');
        $('#jumbo2-quoter').addClass('jumbo-phrase');
        
    }

});

function load() {
    $(window).on('load', function() {

        $('body').addClass('fade-in');

        setTimeout(function() {
            $('#jumbo-name').removeClass('hideme');
            $('#jumbo-name').addClass('jumbo-name');

        }, 1000);
        
        setTimeout(function() {
            $('#jumbo-horizontal').removeClass('hideme');
            $('#jumbo-horizontal').addClass('jumbo-phrase');
        }, 2500);

        setTimeout(function() {
            $('#jumbo-phrase').removeClass('hideme');
            $('#jumbo-phrase').addClass('jumbo-phrase');
        }, 4000);
    });
}

function smoothScroll() {
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 200
                }, 1000);
                return false;
            }
        }
    });
}

setTimeout(smoothScroll, 500);
load();



