(function ($) {

    if ($('.slider__list').length) {
        $.getScript('assets/js/plugins/jquery.slides.js', function () {
            $('.slider__list').slidesjs({
                width: 1280,
                height: 490,
                navigation: {
                    active: false
                }
            });
        });
    }

}(jQuery));