/**
 * Created by lenovo on 2017/9/19.
 */
$(function () {
    var HTTP='http://192.168.43.122:3000/';
    $.ajax({
        type:'post',
        url:HTTP+'serfour/serfour',
        success:function(data) {
            console.log(data);
            $('.cjd-serfour h5').html(data[0].sertitle);
            for(var i=0;i<data.length;i++){
                $('.cjd-serfour-list').append('<li>'+data[i].serlist+'</li>');
            }
        },
        error:function(){
            console.log("错误");
        }
    });

    $.ajax({
        type:'post',
        url:HTTP+'serfourbottom/serfourbottom',
        success:function(data) {
            console.log(data);
            for(var i=0;i<data.length;i++){
                $('.cjd-serfour-bottom li').eq(i).append(data[i].sertext);
            }
        },
        error:function(){
            console.log("错误");
        }
    });
});
