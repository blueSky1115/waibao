/**
 * Created by naice on 2016/6/21.
 */

$(function(){
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
