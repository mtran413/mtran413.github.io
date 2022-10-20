// Get the navbar
const primaryNav = document.querySelector(".primary-navigation");
// Get the button on mobile navbar
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    // get state of data-visible
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

// allow js to load first
$(document).ready(function() {

    // all elements w/ class of scroll 
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    // e = short for event
    scrollLink.click(function(e) {
        // disable jump scroll
        e.preventDefault();
        // animate(css property, duration in ms 
        $('body,html').animate({
            // how far away section is from top
            scrollTop: $(this.hash).offset().top
        }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
        // scrollTop() != scrollTop
        // scrollTop = dist from element's top to topmost visible content
        var scrollbarLocation = $(this).scrollTop();
        
        // set of
        scrollLink.each(function() {
        
            var sectionOffset = $(this.hash).offset().top - 100;
        
            //
            if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
        
    })

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            $("#projects").parent().removeClass('active');
            $("#contact").parent().addClass('active');
        } 
    };
    
});
