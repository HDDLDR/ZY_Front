/**
 * Created by lenovo on 2017/9/19.
 */
$(function () {
    var HTTP='http://192.168.43.122:3000/';
    $.ajax({
        type:'post',
        url:HTTP+'sertwo/sertwo',
        success:function(data) {
            console.log(data);
            $('.cjd-serone-title h5').html(data[0].sertitle);
            for(var i=0;i<data.length;i++){
                $('.cjd-serone-list').append('<li>'+data[i].serlist+'</li>');
            }
        },
        error:function(){
            console.log("错误");
        }
    });
});
