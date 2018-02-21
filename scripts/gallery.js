/*
File Name: gallery.js
Date: 
Programmer: Alexandra Nitsche
*/

/* the code below is for the brackets interactive linter plugin */
/* jshint browser: true */
/* jshint unused: false */
/* global $ */

// The line below is to test your link to the .js file. Please comment it out when it works.
alert("the link to the .js file is correct!");

//The line below is to test your link to the jquery.min.js file. Please comment it out when it works.
if (window.jQuery) {alert("the link to the jQuery file is correct!");}

// Enter your jQuery code below this line (put a blank line first).

$(document).ready(function () {

    //alert("JQuery is in full effect on this page");

    $(".cross").hide();

    $(".menu").hide();

    $(".hamburger").show();
    
    //$("h1").text("Check Out Some Photos from our other events");

    $("#big-photo").attr('src', 'images/finalist.jpg');

    var thumbNames = ['finalistsmall.jpg','groupbikerssmall.jpg', 'medalistsmall.jpg', 'readytoswimsmall.jpg', 'pele_small.jpg', 'ronaldinho_small.jpg', 'ronaldolima_small.jpg', 'zidane_small.jpg'];

    //$.each(thumbNames, function(i) {
    //alert(thumbNames[i]);
    //});

    $('.thumbnail-inner img').each(function (i) {

        (this).src = "images/" + thumbNames[i];


        $('.thumbnail-inner img').click(function () {
            //alert("You just struck gold or an image.");

            $('.thumbnail-inner img').css('opacity', '1');

            $(this).css('opacity', '.5');

            var path = $(this).attr('src');

            path = path.replace("_small", "");

            $('#big-photo').attr('src', path);

            var photoCaption = path.replace(".jpg", "");

            photoCaption = path.replace("images/", "");

            $('#caption').text(photoCaption);
        });

    });


    $('.hamburger').click(function () {

        $(".menu").slideToggle();

        $(".hamburger").hide();

        $(".cross").show();

    });

    $('.cross').click(function () {

        $(".menu").slideToggle();

        $(".cross").hide();

        $(".hamburger").show();


    });









});
