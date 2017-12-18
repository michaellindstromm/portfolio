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
//= require pace
//= require_tree .

var projectInfo = {
    olympicapi: {
        header: "Olympic API",
        description: "olympic api description",
        development: "olympic api development info.",
        img: ["olympicapi.png"],
        tech: ["heroku.svg", "jquery.svg", "ruby.svg", "rails.svg", "postgresql.svg", "bootstrap.svg"]
    }, 

    mazerunner: {
        header: "Maze Runner",
        description: "maze runner description",
        development: "maze runner development info.",
        img: ["mazerunner.png"],
        tech: ["surge.svg", "jquery.svg", "bootstrap.svg", "https://blindedcyclops.neocities.org/p5js-icons/p5-sq-white-background.svg"]
    },

    brewsclues: {
        header: "Brews Clues",
        description: "brews clues description",
        development: "brews clues development info",
        img: ["brewsclues1.PNG", "brewsclues2.PNG"],
        tech: ["angular-icon.svg", "ionic.svg", "jquery.svg", "firebase.svg"]
    }
}

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

    $(document).scrollTop(0);

    $('.test-holder-image').addClass('off');

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

            $('#jumbo-horizontal').removeClass('hideme');
            $('#jumbo-horizontal').addClass('jumbo-phrase');

        }, 3000);
        
        setTimeout(function() {

            $('#jumbo-phrase').removeClass('hideme');
            $('#jumbo-phrase').addClass('jumbo-phrase');

            $('body').removeClass('stop-scrolling');
            $('body').unbind('touchmove')

        }, 4500);

        setTimeout(function() {
        }, 6000);
        
        setTimeout(function() {
            $('.jumbo-arrow').removeClass('hideme');
            $('.jumbo-arrow').addClass('jumbo-phrase');
            if ($('html, body').scrollTop() == 0) {
                $('html, body').animate({ scrollTop: $('.about-section').offset().top - ($('#navbar').height() + $('#navbar').height() * .6)}, 2000);
            }
        }, 8000)

    }, 1000);

});


function ready() {
    $(document).scrollTop(0);

    $(".test-holder-div").hide();
    $(".test-holder-image").hide();
    
    $(".test-holder-div").show();
    $(".test-holder-image").show();
    
    $(document).ready(function() {
        $(this).scrollTop(0);
        // $(".nav-logo").hide();
        $('body').bind('touchmove', function (e) { e.preventDefault() })
        modals();
    });
}

function modals() {
    $('.project-div').on('click', function(e) {
        $('#myModal').modal();
        id = $(this).attr('id');
        project = projectInfo[id]
        $('.modal-title').text(project.header);
        $('.modal-img-lg').html('');
        $(project.img).each((index, item) => {
            if (id !== 'brewsclues') {
                $('.modal-img-lg').append(`<img src='assets/${item}' class='modal-img mx-auto'></img>`);
            } else {
                $('.modal-img-lg').append(`<img src='assets/${item}' class='mx-auto modal-brews-img'></img>`);
            }
        });
        $('.modal-p-description').text(project.description);
        $('.modal-p-development').text(project.development);
        $('.tech-imgs').html('');
        $(project.tech).each((index, item) => {
            if (item.length > 25) {
                $('.tech-imgs').append(`<img src= '${item}' class="tech-img"></img>`);

            } else {
                $('.tech-imgs').append(`<img src= 'assets/icons/${item}' class="tech-img"></img>`);
            }
        });
    });
};

function smoothScroll() {
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {

        var target = $(this.hash);
        var navbarHeight = $('#navbar').height();

        if (target[0]["id"] == "about") {

            $('html, body').stop().animate({
                scrollTop: target.offset().top - navbarHeight * 1.5
            }, 2000);
            return false;

        } else if (target[0]["id"] == "contact") {

            $('html, body').stop().animate({
                scrollTop: target.offset().top - 340
            }, 2000);
            return false;
            
        } else if (target[0]["id"] == "projects") {
            
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 210
            }, 2000);
            return false;
            
        } else {

            $('html, body').stop().animate({
                scrollTop: target.offset().top - 240
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



