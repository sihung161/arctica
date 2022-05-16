$(function(){

    new WOW().init();
    
    var $khoimonan = $('.nhieumon').isotope({
        itemSelector: '.motmon',
        layoutMode: 'masonry'
    });

    // layout Isotope after each image loads
    $khoimonan.imagesLoaded().progress( function() {
        $khoimonan.isotope('layout');
    });

    $('.tieudect a').click(function() {
        dulieu = $(this).data('monan');
        $khoimonan.isotope({ filter: dulieu });
        return false;
    });
})  
 