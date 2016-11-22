$(function(){

    var owl = $("#banner");
    owl.owlCarousel({
        navigation : false,
//        navigationText : ["prev", "next"],
        pagination: false,
        singleItem : true,
        transitionStyle : "fade",
        lazyLoad: true,
        autoPlay : 5000,
        stopOnHover : false,
        loop: true
    });


    var owl = $(".lP");
    owl.owlCarousel({
        navigation : true,
        navigationText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
//        singleItem : true,
        items : 5,
//        transitionStyle : "fade",
        lazyLoad: true,
        autoPlay : 5000,
        stopOnHover : true,
        loop: true
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

    $('.nav>ul>li').hover(function(){
        $('.nav>ul>li').removeClass('active');
        $(this).addClass('active');
    });

    $('.NavProductOption li a').click(function(){
        var t = $(this);
        $('.NavProductOption li a').removeClass('active');
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $(t.attr('data-tab')).addClass('active');
    });

    $('.ADsHome1 ul li a').hover(function(){
        $('.ADsHome1 ul li a').removeClass('active');
        $(this).addClass('active');
    });

});