$(document).ready(function () {
    $('.smooth-scrool').on('click', function (e) {
        e.preventDefault();
        var target = "#" + $(this).attr('data-target');
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            // window.location.hash = target;
        });
    });
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1200, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    if ($.browser.name == "safari") {
        // $(".change-txt").text($.browser.name);
        $(".safari-margin-top").addClass("safari-solution");

    }
    $(".navbar-toggler").click(function (e) {
        $(".navbar-brand").toggleClass('set-oppacity');
        $(".navbar-outer").toggleClass('backgorund-nav-color');
        $(".navbar").toggleClass('full-height');
        if ($(".bars-icon").hasClass('fa-bars')) {
            $(".bars-icon").removeClass('fa-bars').addClass('fa-times')
        } else {
            $(".bars-icon").removeClass('fa-times').addClass('fa-bars')
        }
    });
    var prevImg;
    var prevText;
    var overlayText;
    var overlayTextSm;
    $(".team").hover(
        function () {
            // $( this ).append( $( "<span> ***</span>" ) );
            // $( this ).find( "img" ).attr('src', '')
            prevImg = $(this).find(".image").attr('src');
            prevText = $(this).find(".overlay-heading").html();
            overlayText = $(this).find(".overlay-text").html();
            overlayTextSm = $(this).find(".overlay-text-sm").html();


            $(this).find(".image").attr('src', './images/about/profile.png');
            $(this).find(".overlay-heading").html('Jhon <br> Doe');
            $(this).find(".overlay-text").html('WEB DEVELOPER');
            $(this).find(".overlay-text-sm").html('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');

        }, function () {
            $(this).find(".image").attr('src', prevImg);
            prevText = $(this).find(".overlay-heading").html(prevText);
            $(this).find(".overlay-text").html(overlayText);
            $(this).find(".overlay-text-sm").html(overlayTextSm);
            // $( this ).find( "img" ).remove();
        }
    );

});