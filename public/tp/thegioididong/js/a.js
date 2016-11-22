$(function(){
    $('.addCart').click(function(){

        var products = [], ps = {};
        ps['id'] = $(this).attr('data-id');
        ps['quantity'] = $(this).attr('data-quality');
        products.push(ps);

        addToCart(products, 1, function(rs){
            console.log(rs);

        });

        function addToCart(products, mode, callback) {
            $.ajax({
                type: 'POST',
                url: '/cart/add',
                data: {'products': products, 'mode': mode},
                timeout: 500,
                success: function (rs) {
                    callback(rs);
                }
            });
        }



    });

    $('.remove').click(function(){
        $.post('/cart/remove',{id: $(this).attr('data-id')},function(r){
            console.log(r);

        });
    });
});