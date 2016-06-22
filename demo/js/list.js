/**
 * Created by naice on 2016/6/21.
 */

$(function(){

    // 导航
    $('#all-shop').on('mouseenter', function(){
        $('#second-nav').fadeIn();
    });
    $('#all-shop').on('mouseleave', function(){
        $('#second-nav').fadeOut();
    });

    // 商品分类
    var shopClass = (function(){
        var shopClass = $('#shop-class');
        var shopShowBtn = shopClass.find('.shop-showBtn');
        var shopList = shopClass.find('.shop-list');
        function init(){
            shopShowBtn.on('click', function(){
                shopList.removeClass('active');
                $(this).parent('h4').next("ul").addClass('active');
            })
        }


        return {
            init: init
        }
    })();

    shopClass.init();

    // 分页
    $('.M-box3').pagination({
        pageCount:50,
        jump:true,
        coping:true,
        homePage:'',
        endPage:'',
        prevContent:'<',
        nextContent:'>',
        showData: 5,
        count: 2,
        callback: function(index){
            console.log(index);
        }
    });
})
