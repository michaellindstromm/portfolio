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

var projectInfo = {
    olympicapi: {
        header: "Olympic API",
        development: "The Olympic API allows developers to access historical olympic data from 1896 - 2014. The API was built with Ruby on Rails, and architected strictly around REST principles. Users can sign up, which grants access by way of JSON Web Tokens. Full documentation is provided including endpoints, error handling, access, and a dedicated try server. The try server allows for real time requests to the database.",
        img: ["olympicapi.png"],
        tech: ["heroku.svg", "jquery.svg", "ruby.svg", "rails.svg", "postgresql.svg", "bootstrap.svg"], 
        links: [
            {
                img: "github-icon.svg",
                link: "https://github.com/michaellindstromm/olympic-api"
            }, 
            {
                img: "olympic_rings.png",
                link: "https://olympicapi.herokuapp.com"
            }
        ]
    }, 

    mazerunner: {
        header: "Maze Runner",
        development: "Maze Runner is a simple maze solver game. Built using javascript, p5.js, and canvas, the premis of the game is to race a simple computer AI to the gem hidden somewhere in the maze. Upon entry players are able to see the maze being generated through a recursive function and backtracking through a stack. After completion players choose their difficulty level, press play, and the race is on!",
        img: ["mazerunner.png"],
        tech: ["surge.svg", "jquery.svg", "bootstrap.svg", "https://blindedcyclops.neocities.org/p5js-icons/p5-sq-white-background.svg"],
        links: [
            {
                img: "github-icon.svg",
                link: "https://github.com/michaellindstromm/maze-generation"
            }, 
            {
                img: "mazeicon.png",
                link: "http://amazeing-runner.surge.sh/"
            }
        ]
    },

    brewsclues: {
        header: "Brews Clues",
        development: `Brews Clues is an app built to help beer consumers make choices about which beer they should drink next. The app was built using AngularJS, Ionic1, and Firebase. Upon first use, users register and then rate a preselected list of beers in order to create a baseline rating of different types of beers. All beer information is obtained from the BreweryDB API. Using a custom kNN (k Nearest Neighbors) formula, users scan a QR Code which contains a menu of beers. After scanning, beers on the menu are compared to beers users have already rated, and information is passed through the formula to give the users five beer suggestions from the menu.`,
        img: ["brewsclues1.PNG", "brewsclues2.PNG"],
        tech: ["angular-icon.svg", "ionic.svg", "jquery.svg", "firebase.svg"],
        links: [
            {
                img: "github-icon.svg",
                link: "https://github.com/michaellindstromm/brews-clues"
            }
        ]
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

function load() {
    $(window).on('load', function() {

        $('.test-holder-image').addClass('off');
        setTimeout(function () {


            $(".test-holder-image").fadeOut(2000);

            $(".test-holder-div").addClass("no-height");


            setTimeout(function () {
                $(".test-holder-image").hide();

                $(".nav-logo").fadeIn(2000);
            }, 1500);

            setTimeout(function () {

                $('#jumbo-name').removeClass('hideme');
                $('#jumbo-name').addClass('jumbo-name');

                $('#jumbo-horizontal').removeClass('hideme');
                $('#jumbo-horizontal').addClass('jumbo-phrase');

            }, 3000);

            setTimeout(function () {

                $('#jumbo-phrase').removeClass('hideme');
                $('#jumbo-phrase').addClass('jumbo-phrase');

                $('body').removeClass('stop-scrolling');
                $('body').unbind('touchmove');

                setTimeout(function () {
                    $('.jumbophrase1').removeClass('hideme');
                }, 100);
                setTimeout(function () {
                    $('.jumbophrase2').removeClass('hideme');
                }, 150);
                setTimeout(function () {
                    $('.jumbophrase3').removeClass('hideme');
                }, 200);
                setTimeout(function () {
                    $('.jumbophrase4').removeClass('hideme');
                }, 250);
                setTimeout(function () {
                    $('.jumbophrase5').removeClass('hideme');
                }, 300);

            }, 4500);

            setTimeout(function () {
                $('.jumbo-arrow').removeClass('hideme');
                $('.jumbo-arrow').addClass('jumbo-phrase');
                if ($('html, body').scrollTop() == 0) {
                    $('html, body').animate({ scrollTop: $('.about-section').offset().top - ($('#navbar').height() + $('#navbar').height() * .6) }, 2000);
                }
            }, 7000)

        }, 1000);

    });
};


function ready() {

    
    $(".test-holder-div").hide();
    $(".test-holder-image").hide();
    
    $(".test-holder-div").show();
    $(".test-holder-image").show();
    
    window.onbeforeunload = function () {
        $(".test-holder-div").show();
        $(".test-holder-image").show();
        window.scrollTo(0, 0);
    }
    
    $(document).ready(function() {
        // $(".nav-logo").hide();
        $('body').bind('touchmove', function (e) { e.preventDefault() })
        modals();
    });
}

function modals() {
    $('.project-div').on('click', function(e) {
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
        $('.modal-p-development').text(project.development);
        $('.tech-imgs').html('');
        $(project.tech).each((index, item) => {
            if (item.length > 25) {
                $('.tech-imgs').append(`<img src= '${item}' class="tech-img"></img>`);

            } else {
                $('.tech-imgs').append(`<img src= 'assets/icons/${item}' class="tech-img"></img>`);
            }
        });

        $('.github-links').html('');
        $('.site-links').html('');
        $(project.links).each((index, item) => {
            if (index === 0) {
                $('.github-links').append(`<a href='${item.link}'><img src= 'assets/icons/${item.img}' class="tech-img"></img></a>`);
                $('.github-links').append(`<small class="ml-4"><a href='${item.link}'>${item.link}</a></small>`);
            } else {
                $('.site-links').append(`<a href='${item.link}'><img src= 'assets/icons/${item.img}' class="tech-img"></img></a>`);
                $('.site-links').append(`<small class="ml-4"><a href='${item.link}'>${item.link}</a></small>`);
            }
        });
        $('#myModal').modal();
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
load();



