/**
 * Created by naice on 2016/6/21.
 */
$(function(){
    // 导航
    $('#all-shop').on('mouseenter', function(){
        $('#second-nav').show();
    });
    $('#all-shop').on('mouseleave', function(){
        $('#second-nav').hide();
    });

    // 轮播图调用
    banner('#top-banner', 2000);
    banner('#content-banner', 3000);
})

// banner 根据首页的定制来写
// 传一个banner的容器进去
function banner(obj, time){
    var el = $(obj);
    var oUl = el.find('ul');
    var aLi = oUl.find('li');
    var prev = el.find('.prev-btn');
    var next = el.find('.next-btn');
    var num = 0;
    var timer = null;
    el.on('mouseenter', function(){
        
        clearInterval(timer)
    });
    el.on('mouseleave', function(){
        timer = setInterval(auto, time)
    });
    next.on('click', function(){
        auto();
    });
    prev.on('click', function(){
        var prevNum = num;
        num--;
        if(num < 0){
            num = aLi.length-1;
        }
        aLi.eq(prevNum).fadeOut(800);
        aLi.eq(num).fadeIn(800);
    });

    function auto(){
        var prevNum = num;
        num++;
        if(num>aLi.length-1){
            num = 0;
        }
        aLi.eq(prevNum).fadeOut(800);
        aLi.eq(num).fadeIn(800);
    }
    timer = setInterval(function(){
        clearInterval(timer);
        auto();
    }, time)

}