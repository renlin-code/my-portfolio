
//OPEN AND CLOSE CERTIFICATES
function openCertificate (url) {
    document.getElementById("popup-img").src = url;
}
//SLIDER CONTROLS
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
