$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});

	/***************** Initiate Flexslider ******************/
	$('.flexslider').flexslider({
		animation: "slide"
	});

	/***************** Initiate Fancybox ******************/

	$('.single_image').fancybox({
		padding: 4,
	});

	/***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('section.navigation').addClass('fixed');
				$('header').css({
					"border-bottom": "none",
					"padding": "35px 0"
				});
				$('header .member-actions').css({
					"top": "26px",
				});
				$('header .navicon').css({
					"top": "34px",
				});
			} else {
				$('section.navigation').removeClass('fixed');
				$('header').css({
					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
					"padding": "50px 0"
				});
				$('header .member-actions').css({
					"top": "41px",
				});
				$('header .navicon').css({
					"top": "48px",
				});
			}
		});
	});
	/***************** Smooth Scrolling ******************/

	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});

        $('.sign-up-btn').click(function(){
            var form = $('.signup-form');
            var file_data = $("#file").prop("files")[0];
            var form_data = new FormData();
            form_data.append("file", file_data);
            form_data.append("email", $('input.email').val());
            form_data.append("url", $('input.url').val());
            form_data.append("phone", $('input.phone').val());
            $.ajax({
                xhr: function() {
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener("progress", function(evt) {
                        if (evt.lengthComputable) {
                            var percentComplete = evt.loaded / evt.total;
                            percentComplete = parseInt(percentComplete * 100);
                            console.log(percentComplete);
                            if (percentComplete === 100) {

                            }
                        }
                    }, false);

                    return xhr;
                },
                url: "/home/contact",
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                success: function(data){
                    console.log(data);
//                    if(data.code == 0){
//                        $("#myModal").modal('show');
//                        $('.modal-body p').empty().append(data.ms);
//                    }else if(data.code == 1){
//                        $("#myModal").modal('show');
//                        $('.modal-body p').empty().append(data.ms);
//                        setTimeout(function(){
//                            $("#myModal").modal('hide');
//                            location.reload();
//                        },113000);
//                    }
                }
            });

            $('.signup-form').submit(function(){
                return false;
            });
        });


	});

});