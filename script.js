gsap.fromTo('.loading-page0' , {opacity:1}, {
    opacity:0,
    duration:1.5,
    delay:3.5,
});

gsap.fromTo('.logo-name' , {
    y:50,
    opacity:0,
}, {
    y:0,
    opacity:1,
    duration:2,
    delay:.5,
});

window.addEventListener("load", function() {
    document.querySelectorAll(".content").forEach(function(element) {
        element.style.display = "block";
    });
    document.querySelectorAll(".loader-wrapper").forEach(function(element) {
        element.style.display = "none";
    });
});
