/**
 * Created by lenovo on 2017/9/19.
 */
$(function () {
    var HTTP='http://localhost:3000/';
    $.ajax({
        type:'post',
        url:HTTP+'serthree/serthree',
        success:function(data) {
            console.log(data);
            $('.cjd-serone-title h5').html(data[0].sertitle);
            for(var i=0;i<data.length;i++){
                $('.cjd-serone-list').append('<li>'+data[i].sertext+'</li>')
            }
        },
        error:function(){
            console.log("错误");
        }
    });
    $.ajax({
        type:'post',
        url:HTTP+'serthreeimg1/serthreeimg1',
        success:function(data) {
            console.log(data);
            for(var i=0;i<data.length;i++){
                $('.cjd-serone-img ul').eq(i).append(
                    '<li>'+'<img src="'+HTTP+'images/'+data[i].serimg+'" alt="">'+'</li>'+
                    '<li>'+data[i].serhanzi+'</li>'+
                    '<li>'+data[i].serenglish+'</li>'
                )
            }
        },
        error:function(){
            console.log("错误");
        }
    })
});