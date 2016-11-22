$(function(){

    $("#banner").owlCarousel({
        items: 1,
        singleItem: true,
        nav: true,
        dots: false,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        lazyLoad: true
    });

    var fsearch = $('form#search'), search = $('form#search input[name="q"]');
//    var searchType = $('form#search .selectType p span');

    search.autocomplete({
        source: function () {
            var s = $('#searchFolding');
            s.slideDown();
            $.post(fsearch.attr('action') + '?q=' + search.val() + '&limit=20',
                {template: 'suggestion', terminal: 1},
                function (data) {
                    s.html(data);
                }
            );
        }
    });

    search.keyup(function () {
        if (!$(this).val().length) {
            $('#searchFolding').slideUp();
        }
    }).focus(function () {
            if ($(this).val().length) {
                $('#searchFolding').slideDown();
            }
        }).focusout(function () {
            $('#searchFolding').slideUp();

    });

    $.fn.sizeChanged = function (handleFunction) {
        var element = this;
        var lastWidth = element.width();
        var lastHeight = element.height();

        setInterval(function () {
            if (lastWidth === element.width()&&lastHeight === element.height())
                return;
            if (typeof (handleFunction) == 'function') {
                handleFunction({ width: lastWidth, height: lastHeight },
                    { width: element.width(), height: element.height() });
                lastWidth = element.width();
                lastHeight = element.height();
            }
        }, 100);


        return element;
    };

    $('img.lazy').lazyload({
        effect: "fadeIn",
        threshold: 200
    });

    $('.btSearch').click(function(){
        $('.formSearch').animate({width:'toggle'},350);
    });

    $('.navMobile>ul>li>a').click(function() {
        var checkElement = $(this).next();
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            checkElement.slideUp('normal');
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('ul.categorySidebar ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if (checkElement.is('ul')){
            return false;
        } else {
            return true;
        }
    });


});