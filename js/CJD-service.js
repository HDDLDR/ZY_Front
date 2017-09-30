/**
 * Created by lenovo on 2017/9/19.
 */
$(function () {
    var HTTP='http://localhost:3000/';
    $.ajax({
        type:'post',
        url:HTTP+'service/service',
        success:function(data) {
            console.log(data);
            for(var i=0;i<data.length;i++){
                $('.cjd-service-list ul').eq(i).append('<li class="cjd-service-list-text left">'+ '<h5>'+data[i].sertitle+'</h5>'+ '<h6>'+data[i].sertext+'</h6>'+'</li>');
            }
        },
        error:function(){
            console.log("错误");
        }
    });
    $(".cjd-service-list").hover(
        function () {
            $(".cjd-service-list p").stop().animate({width:"600"},"slow");
            $(this).siblings().children("p").stop().animate({width:"0"},"slow");
        },
        function () {
            $(".cjd-service-list p").stop().animate({width:"0"},50);
        }
    )
});