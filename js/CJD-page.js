/**
 * Created by lenovo on 2017/9/19.
 */
$(function () {
    var HTTP='http://localhost:3000/';
    $.ajax({
        type:'post',
        url:HTTP+'page/page',
        success:function(data) {
            console.log(data);
            data.map(function (i) {
                $('#page-bottom').append(
                    '<li>'+'总部地址：'+i.pageurl+'</li>'+
                    '<li>'+'总部电话：'+i.pagetel+'</li>'+
                    '<li>'+'电子邮箱：'+i.pageemail+'</li>'+
                    '<li>'+'邮政编码：'+i.pagezip+'</li>'
                );
            })
        },
        error:function(){
            console.log("错误");
        }
    })
});