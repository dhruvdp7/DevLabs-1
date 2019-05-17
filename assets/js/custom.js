/* ----------------- Start JS Document ----------------- */
(function ($) {
    "use strict";

    $(document).ready(function () {
        //Nav Menu
        $(".nav > li:has(ul)").addClass("drop");
        $(".nav > li.drop > ul").addClass("dropdown");
        $(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");

        // let droplist = document.querySelectorAll(".dropdown");
        // droplist[0].addEventListener('click', dropdownClick);

        // function dropdownClick() {
        //     console.log("hello");
        //     droplist[0].style.visibility = "hidden";

        // }

        // Our client
        var blogs = $(".blog-slider");
        blogs.owlCarousel({
            items: 3,
            nav: false,
            dots: true,
            autoplay: true,
            center: false,
            loop: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 3
                }
            },
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ]
        });

        // Widget About
        var aboutSlide = $(".wi-about-slide");
        aboutSlide.owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            center: true,
            loop: true,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ]
        });

        // Customer Review
        var reviewSlider = $(".review-slider");
        reviewSlider.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            center: true,
            loop: true,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ]
        });


        $(".various").fancybox({
            maxWidth: 800,
            maxHeight: 600,
            fitToView: false,
            width: "70%",
            height: "70%",
            autoSize: false,
            closeClick: false,
            openEffect: "none",
            closeEffect: "none"
        });

        $("[data-fancybox]").fancybox({
            // Options will go here
            toolbar: true,
            animationEffect: "zoom-in-out",
            transitionEffect: "circular",
            thumbs: {
                autoStart: false, // Display thumbnails on opening
                hideOnClose: true, // Hide thumbnail grid when closing animation starts
                parentEl: ".fancybox-container", // Container is injected into this element
                axis: "y" // Vertical (y) or horizontal (x) scrolling
            },
            buttons: [
                "slideShow",
                "fullScreen",
                "thumbs",
                // 'share',
                //'download',
                //'zoom',
                "close"
            ]
        });



        // carousel to mobile touchable
        $(".carousel").each(function () {
            var el = $(this);
            el.swiperight(function () {
                el.carousel("prev");
            });
            el.swipeleft(function () {
                el.carousel("next");
            });
        });

        // Click me to the my section
        $(".click-to-next").on("click", function () {
            var secHeight = $("#main-slider").height();
            $("html").animate({
                    scrollTop: secHeight + 15
                },
                900
            );
        });
        $(".scroll-section").on("click", function () {
            var secHeight = $("#main-slider").height();
            $("html").animate({
                    scrollTop: secHeight - 61
                },
                900
            );
        });

        // Slick Slider || ourteam
        $(".slider-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            dots: true,
            centerPadding: 0,
            asNavFor: ".slider-nav"
        });

        $(".slider-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".slider-for",
            dots: false,
            infinite: true,
            centerMode: true,
            centerPadding: 0,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }]
        });

        // Sick Slider || Services
        $(".service-slider-content").slick({
            slidesToShow: 1,
            arrows: false,
            draggable: false,
            speed: 500,
            asNavFor: ".slider-thumb"
        });
        $(".slider-thumb").slick({
            arrows: false,
            asNavFor: ".service-slider-content",
            centerMode: false,
            centerPadding: "15px",
            dots: false,
            infinite: false,
            focusOnSelect: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }]
        });

        $(".service-slider-content-2nd").slick({
            slidesToShow: 1,
            arrows: false,
            draggable: false,
            speed: 500,
            asNavFor: ".slider-thumb-2nd"
        });
        $(".slider-thumb-2nd").slick({
            arrows: false,
            asNavFor: ".service-slider-content-2nd",
            centerMode: false,
            centerPadding: "15px",
            dots: false,
            infinite: false,
            focusOnSelect: true,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 6
                }
            }]
        });

        //Slick Nav

        $(".wpb-mobile-menu").slicknav({
            prependTo: ".navbar-header",
            parentTag: "margo",
            allowParentLinks: true,
            duplicate: false,
            label: "",
            closedSymbol: '<i class="fa fa-plus"></i>',
            openedSymbol: '<i class="fa fa-minus"></i>'
        });





    }); //$(document).ready

    //team section

    //Back Top Link

    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $(".back-to-top").fadeIn(400);
        } else {
            $(".back-to-top").fadeOut(400);
        }
    });

    $(".back-to-top").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({
                scrollTop: 0
            },
            600
        );
        return false;
    });

    $(window).on("load", function () {
        $("#loader").fadeOut();

        // Isotope gallery
        var $container = $(".gallery-container");

        $container.isotope({
            filter: "*",
            masonry: {
                horizontalOrder: true
            },
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            }
        });

        $(".gallery-filter a").on("click", function () {
            $(".gallery-filter .current").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr("data-filter");
            $container.isotope({
                filter: selector,
                percentPosition: true,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false
                }
            });
            return false;
        });
    }); //Window Load End

    $(window).on("load", function () {
        initMap();
    });

    function scrollToElement(selector) {
        $("html, body").animate({
                scrollTop: $(selector).offset().top
            },
            2000
        );
    }

    $(document).on("click", "a", function () {
        scrollToElement($(this).attr("href"));
    });
})(jQuery);

//----------------INDEX PAGE TEAM SECTION----------------//

let item = document.querySelectorAll(".team-item--indexpage");
let desc = document.querySelector(".item_description");
item[0].addEventListener("click", item1Click);
item[1].addEventListener("click", item2Click);
item[2].addEventListener("click", item3Click);
item[3].addEventListener("click", item4Click);
item[4].addEventListener("click", item5Click);

function item1Click() {
    console.log("hello");
    desc.innerHTML =
        "<p>As founder and CEO of QA InfoTech Worldwide, Mukesh is responsible for the company's vision and leads the organization's worldwide operations, marketing, sales and development efforts.</p><p>Mukesh holds a Master of Science and Technology in Information Systems from  Birla Institute of Technology and Science (BITS), Pilani, India, as well as a Master of Engineering in Engineering Management from University of Colorado, Boulder, USA.</p>";
}

function item2Click() {
    desc.innerHTML =
        "<p>Rajesh co-founded QA InfoTech with CEO Mukesh Sharma and oversees global operations, strategic planning and key growth initiatives in emerging sectors.</p> <p>Rajesh holds a master’s degree in Software Systems from Birla Institute of Technology and Science (BITS), Pilani, India.</p>";
}

function item3Click() {
    desc.innerHTML =
        "<p>As Chief Technology Officer, Kunal is focused on driving technology and strategy as the company moves into additional vertical markets and technology areas.</p> <p>He holds a Master of Science in Computer Information Systems from Boston University, and a Bachelor of Engineering(Honors) in Computer Science from Birla Institute of Technology and Science(BITS), Pilani, India. </p>";
}

function item4Click() {
    desc.innerHTML =
        "<p>Minesh started his career at QA InfoTech in 2003 and has been instrumental in nurturing clients and generating a strong history of repeat business for the company.</p><p>Minesh holds a Master of Science Degree in Bioinformatics from Marquette  University, Milwaukee, WI, USA.</p>";
}

function item5Click() {
    desc.innerHTML = "<p>Prashant is the one stop solution for all server side programming queries. With more than 9+ years of experience he is amazing at laying out server side architectures by intelligent use of caching systems such as Memcached and new algorithmic methods. He is a J2EE/Java champion but dabbles well in multiple languages and technologies.</p>";
}

//----------------INDEX PAGE TEAM SECTION END----------------//