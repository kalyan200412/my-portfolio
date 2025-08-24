$(document).ready(function() {
    // Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $(".header-area").addClass("sticky");
        } else {
            $(".header-area").removeClass("sticky");
        }
        updateActiveSection();
    });

    // Smooth scrolling and active link highlighting
    $(".header ul li a").click(function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var offset = $(target).offset().top - 40;

        $("html, body").animate({
            scrollTop: offset
        }, 500);

        $(".header ul li a").removeClass("active");
        $(this).addClass("active");
    });

    // Menu icon for mobile
    $(".menu_icon i").click(function() {
        $(".header ul").slideToggle();
    });

    // Typing animation for the name
    var typed = new Typed("#typing-name", {
        strings: ["Kalyan Sai Tadivalasa", "A Software Engineer", "A Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // Scroll reveal animations
    ScrollReveal({
        distance: "100px",
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
        origin: "left"
    });
    ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
        origin: "right"
    });
    ScrollReveal().reveal(".project-title, .contact-title, .skills-title, .frameworks-title", {
        origin: "top"
    });
    ScrollReveal().reveal(".project, .skill, .framework", {
        origin: "bottom"
    });

    // Update active section on scroll
    function updateActiveSection() {
        var currentScroll = $(window).scrollTop();
        $("section").each(function() {
            var sectionTop = $(this).offset().top - 80;
            var sectionBottom = sectionTop + $(this).outerHeight();
            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                var target = "#" + $(this).attr("id");
                $(".header ul li a").removeClass("active");
                $('.header ul li a[href="' + target + '"]').addClass("active");
            }
        });
    }
});
