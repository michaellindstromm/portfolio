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

    if ($(this).scrollTop() > 735 && $(this).scrollTop() < 1575) {
        $('.navbar').removeClass('transparent-nav');
        $('.navbar').addClass('colored-nav');
    } else if ($(this).scrollTop() > 2310) {
        $('.navbar').removeClass('transparent-nav');
        $('.navbar').addClass('colored-nav');
    } else {
        $('.navbar').removeClass('colored-nav');
        $('.navbar').addClass('transparent-nav');
    }

});

function load() {
    $(document).ready(function() {
        setTimeout(function() {
            $('#jumbo-name').removeClass('hideme');
            $('#jumbo-name').addClass('jumbo-name');

        }, 1000);
        
        setTimeout(function() {
            $('#jumbo-phrase').removeClass('hideme');
            $('#jumbo-phrase').addClass('jumbo-phrase');
        }, 3000);
    });
}

function smoothScroll() {
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
        console.log('hello');
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



