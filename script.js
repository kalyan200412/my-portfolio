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
        $("html, body").animate({scrollTop: offset}, 500);
        $(".header ul li a").removeClass("active");
        $(this).addClass("active");
    });

    // Menu icon for mobile
    $(".menu_icon i").click(function() {
        $(".header ul").slideToggle();
    });

    // Typing animation
    var typed = new Typed("#typing-name", {
        strings: ["Kalyan Sai Tadivalasa", "A Software Engineer", "A Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // Scroll reveal animations
    ScrollReveal({distance: "100px", duration: 2000, delay: 200});
    ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {origin: "left"});
    ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {origin: "right"});
    ScrollReveal().reveal(".project-title, .contact-title, .skills-title, .frameworks-title", {origin: "top"});
    ScrollReveal().reveal(".project, .skill, .framework", {origin: "bottom"});

    // Update active section on scroll
    function updateActiveSection() {
        var currentScroll = $(window).scrollTop();
        $("section").each(function() {
            var sectionTop = $(this).offset().top - 80;
            var sectionBottom = sectionTop + $(this).outerHeight();
            var sectionId = $(this).attr("id");
            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                $(".navbar a").removeClass("active");
                $(".navbar a[href='#" + sectionId + "']").addClass("active");
            }
        });
    }

    // Contact form submission
    const form = document.querySelector("form");
    const msg = document.getElementById("msg");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" }
        }).then((response) => {
            if (response.ok) {
                msg.innerHTML = "Message Sent Successfully";
                setTimeout(() => { msg.innerHTML = ""; }, 5000);
                form.reset();
            } else { msg.innerHTML = "Error sending message. Please try again."; }
        }).catch(() => { msg.innerHTML = "Error sending message. Please try again."; });
    });
});
