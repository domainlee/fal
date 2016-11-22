$(function(){
	$('#psQttDown').click(function(){
		var qtt = $('#psQtt'), v = parseInt(qtt.attr('val'));
		if(v > 1){
			 qtt.attr('val', v - 1);
	         qtt.html(v - 1);
		}
	});
	$('#psQttUp').click(function (e) {
		e.stopPropagation();
        var qtt = $('#psQtt'), m = parseInt(qtt.attr('max')), v = parseInt(qtt.attr('val'));
        if (v < m) {
        	console.log(v);
            qtt.attr('val', v + 1);
            qtt.html(v + 1);
        }
    });
	
	$('.color a').click(function () {
        var t = $(this), size = $('.size a'), qtt = $('#psQtt'), atc = $('#btAddCart'), attrs = {};
        if (!t.hasClass('active')) {
            $('.color a').removeClass('active');
            atc.attr('title', 'Vui lòng chọn màu sắc hoặc kích cỡ!').attr('ck', 0).addClass('unsel');
            if (size.length > 1) {
                size.removeClass('active deactive');
                t.addClass('active');
                size.removeAttr('title');
                attrs[$('.color').attr('column')] = t.attr('value');
                size.each(function () {
                    var t = $(this);
                    attrs[$('.size').attr('column')] = t.attr('value');
                    $.post(
                    		'/product/child?psId=' + $('#btAddCart').attr('psid'),
                    		{'attrs': attrs},
                			function(rs){
                				if (rs.code == 1) {
                                    t.attr('qtt', rs.data.quantity);
                				}else{
                					t.addClass('deactive').attr('title', 'Sản phẩm tạm thời hết hàng!').removeAttr('qtt');
                				}
                			},
                			'json'
                	);
                });

            } else {
            	if (t.attr('qtt')) {
                    t.addClass('active');
                    atc.attr('selId', t.attr('selId')).removeAttr('title').attr('ck', 1).removeClass('unsel');
                    qtt.attr('max', t.attr('qtt'));
            	}
            }
        }
    });
	$('.size a').click(function () {
        var t = $(this), size = $('.size a'), qtt = $('#psQtt'), atc = $('#btAddCart');
        if (!t.hasClass('active')) {
            size.removeClass('active');
            atc.attr('title', 'Vui lòng chọn màu sắc hoặc kích cỡ!').attr('ck', 0).addClass('unsel');
            if ($('.color').length && !$('.color a.active').length) {
                size.attr('title', 'Vui lòng chọn màu trước!');
            } else {
                if (t.attr('qtt')) {
                    t.addClass('active');
                    qtt.attr('max',t.attr('qtt'));
                    atc.attr('selId', t.attr('selId')).removeAttr('title').attr('ck', 1).removeClass('unsel');
                }
            }
        }
    });
	 //zoom image
    CloudZoom.quickStart();
    $('#z').bind('click',function(){       // Bind a click event to a Cloud Zoom instance.
        var cloudZoom = $(this).data('CloudZoom');   // On click, get the Cloud Zoom object,
        $.fancybox.open(cloudZoom.getGalleryList(),{padding:0}); // and pass Cloud Zoom's image list to Fancy Box.
        return false;
    });
    
});














