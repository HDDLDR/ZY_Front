/**
 * Created by lenovo on 2017/9/19.
 */
$(function () {
    var HTTP='http://192.168.43.122:3000/';
    $.ajax({
        type:'post',
        url:HTTP+'teamimg1/teamimg1',
        success:function(data) {
            console.log(data);
            for(var i=0;i<data.length;i++){
                $('.cjd-team-list-wrap div a').eq(i).append('<img src="'+HTTP+'images/'+data[i].teamimg+'" alt="">')
            }
            for(var i=0;i<data.length;i++){
                $('.cjd-team-list-wrap div ul').eq(i).append(
                    '<li class="cjd-team-list-title">'+data[i].title+'</li>'+
                    '<li class="cjd-team-list-job">'+data[i].job+'<span>'+'→'+'</span>'+'</li>'+
                    '<li class="cjd-team-list-text">'+data[i].text+'</li>'
                )
            }
        },
        error:function(){
            console.log("错误");
        }
    });
    $('.cjd-team-list').hover(function () {
        $(this).find('img').css("transform","scale(1.1)");
        $(this).find('ul').css("transform","translate(40px)");
    },function () {
        $(this).find('img').css("transform","scale()");
        $(this).find('ul').css("transform","translate()");
    })
});
