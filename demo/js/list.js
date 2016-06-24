/**
 * Created by naice on 2016/6/21.
 */

$(function(){
    // 页面初始化
    function init(){
        // 导航
        FnNav.init();
        // 商品分类
        shopClass.init();
        // 列表缩略图
        listThumb.init();
        // 分页
        paging.init();
    }

    // 导航模块
    var FnNav = (function(){
        function init(){
            $('#all-shop').on('mouseenter', function(){
                $('#second-nav').fadeIn();
            });
            $('#all-shop').on('mouseleave', function(){
                $('#second-nav').fadeOut();
            });
        }
        return {
            init: init
        }
    })();


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

    // 列表缩略图
    var listThumb = (function(){
        var ShoplistContent = $('#ShoplistContent');
        var shopContent = ShoplistContent.find('.shop-content');
        function init(){
            for( var i = 0; i < shopContent.length; i++ ){
                comment(shopContent[i])
            }
        }
        function comment(obj){
            var el = $(obj);
            var prev = el.find('.prev');
            var next = el.find('.next');
            var imgs = el.find('.imgs');
            var oUl = el.find('ul');
            var aLi = oUl.find('li');
            // 计算ul的长度
            var allWidth = $(aLi[0]).outerWidth(true)*aLi.length;
            oUl.css('width', allWidth+'px');
            var boxWidth = imgs.width();
            var num = 0;
            var times = Math.ceil(allWidth / boxWidth);
            console.log(times);
            next.on('click', function(){
                if(times==1){
                    return;
                }
                else{
                    num ++;
                }

                if(num >= times - 1){
                    num = times - 1
                }
                var goLeft = boxWidth * num;
                var chazhi = allWidth - goLeft;
                if( chazhi < boxWidth ){
                    oUl.animate({left: (-goLeft+chazhi)+'px'});
                }
                else{
                    oUl.animate({left: (-goLeft)+'px'});
                }
            });
            prev.on('click', function(){
                num --;
                if(num <= 0){
                    num = 0
                }
                var goLeft = boxWidth * num;
                oUl.animate({left: (-goLeft)+'px'}, function(){
                    console.log(oUl.offset().left);
                });
            })

        }
        return {
            init: init
        }
    })();

    // 分页模块
    var paging = (function(){
        function init(){
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
        }
        return {
            init: init
        }
    })();

    // 初始化调用
    init();

})

