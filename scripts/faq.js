/*
File Name: faq.js
Date: 01/29/18
Programmer: Alexandra Nitsche
*/

/* the code below is for the brackets interactive linter plugin */
/* jshint browser: true */
/* jshint unused: false */
/* global $ */

// The line below is to test your link to the .js file. Please comment it out when it works.
//alert("the link to the .js file is correct!");

// The line below is to test your link to the jquery.min.js file. Please comment it out when it works.
//if (window.jQuery) {alert("the link to the jQuery file is correct!");}

// Enter your jQuery code below this line (put a blank line first).

$(document).ready(function () {

    //alert("JQuery is having a party on this page");

    $("h1").text("Frequently Asked Questions (FAQ)");

    $("h2").text("Alexandra Nitsche");

    $("h1").css("color", "#0000ff");
    
    $("h1,h2").addClass("headings");
    
    $("dt:nth-child(1)").text("What are the Rules?");
    
    $("p:nth-child(1)").text("We currently adhere to the USAT Rules for Triathlon & Duathlon.  Important rules include no drafting, you must wear a helmet and music is ABSOLUTELY NOT allowed during the bike for obvious safety reasons.");
    
    $("dt:eq(1)").text("Can I use a personal music device while cycling?");
    
    $("p:eq(1)").text("Absolutely no music devices are allowed during the bike segment for obvious safety risks and will result in immediate disqualification.");
    
    $("dt:eq(2)").text("Can I use a personal music device while running?");
    
    $("p:eq(2)").text("During any running segments, we prefer for athletes to NOT use music devices to maximize safety, assure a fair competitive environment and assure athletes can hear all course marshal instructions. With that said, we also understand that many athletes rely on music to help endure the challenge of running. To accommodate the needs of our athletes while still assuring maximum safety and a fair, competitive environment, here is the arrangement that we can accommodate.");
    
    $("p:eq(3)").text("If you chose to use a personal music device, you must always keep one ear open for instructions so only one ear-bud can be used at any time. In addition, if you opt to use music, you will not be eligible for awards, points and rankings. So as an athlete, you have to make a choice…music or awards/points/rankings.");
    
    $("p:eq(4)").text("If you are using a personal music devise with two earbuds, you will be immediately disqualified. Trust us, we don’t want to have to enforce a disqualification but in order to assure the safety of all athletes, this is a very important rule.");
    
    $("p:eq(5)").text("We also request that if you chose to use a personal music device that you keep the volume to a minimum to assure all instructions can be heard.");
    
     $("dt:eq(3)").text("Do I need to wear a wetsuit?");
    
    $("p:eq(3)").text("No, you do not need to wear a wetsuit. Many will not wear a wetsuit while others will choose to wear a wetsuit because of the buoyancy and warmth factor.");
    
    $("dt:eq(4)").text("Do I have to use a road or racing bike?");
   
    $("p:eq(5)").text("No. We welcome any type of bike as long as it is functioning properly with brakes and endcaps at the end of your handlebars.");
    
    $(".headings").css("font-family", "Arial, Helvetica, sans-serif");

    $(".headings").css("text-align", "center");

    $("dd").hide();

    //$("dt").on("click", function(){
        //alert("You clicked on it");
        //$(this).next().show();   
    //});

    //$("dt").on("click", function(){
        //alert("You clicked on it");
        //$(this).next().toggle();
    //});

    //$("dt").on("click", function () {
        //$(this).next().slideToggle();
    //});

    //$("dt").on("click", function(){
        //$(this).addClass("open");
    //});

    //$("dt").on("click", function () {
        //$(this).toggleClass("open");
    //});

    $("dt").on("click", function () {
        $(this).toggleClass("open").next().slideToggle();
    });

});
