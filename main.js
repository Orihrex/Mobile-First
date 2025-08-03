// Animate Smooth Scroll
$('View-Work').on('click', function() {
    const image = $('#image').position().top;

    $('html, body').animate({
        scrollTop: image
    }, 
    900
);
});
