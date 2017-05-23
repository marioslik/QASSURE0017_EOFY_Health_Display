// JavaScript Document
var container;
var content;
var dcLogo;
var bgExit;
var tl;
var preload;

$(document).ready(function () {

    var i = [
        "base-image-01.jpg",
        "logo-qantas.svg",
        "shape-blue.svg",
        "shape-mask.svg",
        "shape-red.svg",
        "shape-white.svg"
    ];

    preloadimages(i).done(function (images) {
        console.log("loaded");
        imagesLoaded = true;
        initCSS()
        startAnimation()
    });
});

function initCSS() {

    //SET STARTING POSITIONS FOR ELEMENTS
    TweenLite.set($("#blue-shape"), {alpha: 1, rotation: 50, scaleX: 0.4, scaleY: 0.4, x: 60, y: 80, overwrite: "none", force3D: false});
    TweenLite.set($("#blue-shape-small"), {alpha: 1, rotation: -20, scaleX: 0.2, scaleY: 0.2, x: 140, y: 83, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.3, scaleY: 0.3, x: -2235, y: -1270, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 160, transformOrigin: "50% 50%", overwrite: "none", force3D: false});
    TweenLite.set($("#red-gradient"), {autoAlpha:0, rotation:50, x:-214, y: -310, transformOrigin:"50% 50%", scale:0.7}); // rotation:35, autoAlpha:1, x:-214, y:-300,
    TweenLite.set($("#partnership-white-shape-small"), {x:137, y:106, scaleX:0.8, scaleY:1});
    TweenLite.set($(".qantas-logo"), {alpha:0});
    TweenLite.set($("#text-base-shape"), {rotation:0, autoAlpha:1, x:146, y:-196, scaleX:0.9, scaleY:0.8}); // x:-349,

    $( ".banner" ).hover(
        function() {
            $("#cta-button").addClass('hover');
        }, function() {
            $("#cta-button").removeClass('hover');
        }
    );

    if($('.terms-txt').text().length > 0)
    {
        $('.terms').click(function(){
          console.log('extended terms');
          $('.overlay').fadeIn();
          $('.terms').fadeOut();
      });

        $('.overlay-close').click(function(){
          $('.overlay').fadeOut();
          $('.terms').fadeIn();
      });
    }else{
        $('.terms').click(function(){
          console.log('clicktag invoked');
          Enabler.exitOverride('clickthrough', clickTag);
      });
    }

    $('.clicktag').click(function(){
        console.log('clicktag invoked');
        Enabler.exitOverride('clickthrough', clickTag);
    });
}

//------------------------------- MAIN ANIMATION -------------------------------

var percentFill = 80, /* in %, ie. this is 10% */
    duration    = 1.5;

function startAnimation() {

    console.log("startAnimation");

    $(".container").show();
    $(".loader").hide();

    bannerWidth = $(".container").width();
    bannerHeight = $(".container").height();

    tl = new TimelineLite();

    //FRAME 01/INTRO ------------------------------------------------
    // tl.from(".bg-image-01", 1, {alpha: 0, ease: Power1.easeIn}, "0");
    tl.fromTo(".bg-image-01", 6, {y:-50}, {y:0}, "0")
    tl.to(".bg-image", 1, {alpha:0, ease:Power1.easeInOut}, "3.5");

    tl.from("#messaging-frame-01", 2, {alpha: 0, y:-10, ease: Power1.easeInOut}, "4");
    tl.from("#logos-container", 1.7, {alpha:0, x:-15, ease: Power1.easeOut}, "1");
    tl.call(countDown, [900, 999, 000, ".hundreds-countdown"], this, "3.5");
    tl.from(".terms", 1.2, {alpha: 0, ease: Power1.easeOut}, "4.6");

    // tl.from("#partnership-white-shape-small", 2.5, {autoAlpha:1, x:-70, ease: Power1.easeOut}, "0");
    tl.to("#white-grad-small-stop-01", 0, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "0");
    tl.to("#white-grad-small-stop-02", 0, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, ".3");
    tl.to("#white-grad-small-stop-03", 0, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, ".7");

    tl.to("#text-base-shape", 2.5, {x:-349, autoAlpha:1, ease: Power1.easeOut}, "0");
    tl.to("#text-base-shape2", 0.1, { autoAlpha:1, ease: Power1.easeOut}, "0"); // rotation:120, scale:.8,
    tl.to("#text-base-grad-stop-01", 1.5, {stopOpacity:1, ease:Power1.easeInOut}, ".7"); //2
    tl.to("#text-base-grad-stop-02", 1.5, {stopOpacity:1, ease:Power1.easeIn}, ".7"); //1
    tl.to("#text-base-grad-stop-03", 1.5, {stopOpacity:1, ease:Power1.easeInOut}, ".7"); // 2.5

    //Base Gradient
    tl.to("#red-grad-values", 3, {attr:{cx:364, cy:45, r:450}, ease:Power2.easeInOut}, "0");
    tl.to("#base-grad-stop-01", 1, {stopOpacity:0, ease:Power2.easeOut}, ".2");
    tl.to("#base-grad-stop-02", 2, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#red-gradient", 2, {rotation:35, autoAlpha:1, x:-314, y:-300, scale:1, ease: Power1.easeOut}, "5"); //-118
    tl.to("#red-grad-stop-02", 2, {stopOpacity:1, ease:Power1.easeIn}, ".5");
    tl.to("#red-grad-stop-03", 1.5, {stopOpacity:1, ease:Power1.easeInOut}, ".5");

    //Shape Reveal Intro
    tl.to(".shapes", 2, {alpha:1, rotation: -20, transformOrigin: "50% 50%"}, "0");
    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1, scaleY: 1, x: -2140, y: -1315,  ease: Power1.easeInOut}, "0");
    tl.to("#blue-shape-small", 1, {alpha:1, rotation: 90, scaleX: 0.2, scaleY: 0.2, x: 251, y: 35, ease: Power1.easeInOut}, ".3");
    tl.to("#blue-shape", 1, {alpha:1, rotation: -90, scaleX: 1.3, scaleY: 1.3, x: -45, y: 100, ease: Power1.easeInOut}, ".3");
    tl.to("#mask-shape", 1, {rotation: 0, scaleX: 3.65, scaleY: 3.65, x: -1756, y: -1315, ease: Power3.easeInOut}, "1.1");
    tl.to("#blue-shape", 0.4, {rotation: -180, scaleX: 1.3, scaleY: 1.3, x: -290, y: 280, ease: Power2.easeIn}, "1.3");

    //FRAME 02  ------------------------------------------------
    tl.add("frame02", 7);

    tl.to("#messaging-frame-01", 0.8, {alpha: 0, y:0, ease: Power1.easeOut}, "frame02+=.3");
    tl.from("#messaging-frame-02", 1.5, {alpha: 0, y:0, ease: Power1.easeInOut}, "frame02+=.3");

    //END FRAME  ------------------------------------------------
    tl.add("endframe", 12);

    tl.to("#messaging-frame-02", 1.2, {alpha: 0, y: -20, ease: Power1.easeInOut}, "endframe");
    tl.from("#messaging-endframe", 2, {alpha: 0, y: 20, ease: Power1.easeInOut}, "endframe+=.6");
    tl.from("#cta-button", 2, {alpha: 0, y: 10, ease: Power2.easeOut}, "endframe+=1.6");
    tl.to("#red-grad-values", 3, {attr:{cx:364, cy:45, r:170}, ease:Power2.easeInOut}, "endframe-=1");

    // tl.to("#logos-container", 2, {y:20, ease:Power2.easeInOut}, "endframe+=.3");
    tl.from(".logo-partner", 2, {autoAlpha:0, y:-10, ease:Power2.easeInOut}, "endframe+=.4");
    // tl.to(".logo-qantas", 1.2, {scale:0.9, ease: Power1.easeInOut}, "endframe+=0.9");
}

function countDown(startingPoint, limit, target, element) {

    var i = startingPoint;
    var limit = parseInt(limit);
    var target = parseInt(target);
    var value;

    var si = setInterval(function(){
        if(i < limit) {
            i++;
            value = i;
        }
        if (i === limit) {
            i = 0;
            value = i;
        }
        if(i === target) {
            $(".hundreds-countdown").html("000")
            $(".thousands-countdown").html("75")
            clearInterval(si)

        }
        if (i < 10) {

            value = i;
            value = "00" + i;
        }
        $(element).html(value)

    }, 18)
}

function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0;
    var postaction = function () {};
        arr = (typeof arr != "object") ? [arr] : arr;

    function imageloadpost() {
        loadedimages++;
        if (loadedimages == arr.length) {
            postaction(newimages); //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image();
        newimages[i].src = arr[i];
        newimages[i].onload = function () {
            imageloadpost();
        };
        newimages[i].onerror = function () {
            imageloadpost();
        };
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction; //remember user defined callback functions to be called when images load
        }
    };
}
