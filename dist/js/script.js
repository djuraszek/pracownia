(function (){
    "use strict";

     function carousels() {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            freeDrag: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                680: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        });
        console.log("asdasda");
    };


    function applyIt() {
        alert('hello world');
        carousels();
        return this;
    }

    // (setCarousel = function () {
    //   carousels();
    // })(jQuery);
})();