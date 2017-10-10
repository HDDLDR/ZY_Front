/**
 * Created by lenovo on 2017/9/20.
 */
$(function () {
    var HTTP='http://localhost:3000/';
    //全部
    $.ajax({
        type:'post',
        url:HTTP+'news/news',
        success:function(data) {
            console.log(data);
            for(var i=0;i<data.length;i++){
                $('.cjd-news-right-text-data').eq(i).append(
                        '<h5 class="left">'+data[i].newsmouth+'<br/>'+'<span>'+data[i].newsyears+'</span></h5>'+
                        '<div class="cjd-news-right-text-new left">'+
                            '<h4>'+data[i].newstitle+'</h4>'+
                            '<p>'+data[i].newscon+'</p>'+
                        '</div>'+'<h2 class="left">'+'→'+'</h2>'
                )
            }
        },
        error:function(){
            console.log("错误");
        }
    });

    //品牌故事
    $.ajax({
        type:'post',
        url:HTTP+'news1/news1',
        success:function(data) {
            console.log(data);
            for(var i=0;i<data.length;i++){
                $('.cjd-news-right-text-data1').eq(i).append(
                    '<h5 class="left">'+data[i].newsmout+'<br/>'+'<span>'+data[i].newsyears+'</span></h5>'+
                    '<div class="cjd-news-right-text-new left">'+
                    '<h4>'+data[i].newstitle+'</h4>'+
                    '<p>'+data[i].newscon+'</p>'+
                    '</div>'+'<h2 class="left">'+'→'+'</h2>'
                )
            }
        },
        error:function(){
            console.log("错误");
        }
    });

    //行业资讯
    $.ajax({
        type:'post',
        url:HTTP+'news2/news2',
        success:function(data) {
            console.log(data);
            for(var i=0;i<data.length;i++){
                $('.cjd-news-right-text-data2').eq(i).append(
                    '<h5 class="left">'+data[i].newsmouth+'<br/>'+'<span>'+data[i].newsyears+'</span></h5>'+
                    '<div class="cjd-news-right-text-new left">'+
                    '<h4>'+data[i].newstitle+'</h4>'+
                    '<p>'+data[i].newscon+'</p>'+
                    '</div>'+'<h2 class="left">'+'→'+'</h2>'
                )
            }
        },
        error:function(){
            console.log("错误");
        }
    });

    $('.cjd-news-right-text').addClass("animated slideInUp");
    $('.cjd-news-right-text').hover(
        function () {
            $(".cjd-news-right-text h1").stop().animate({height:"90"},"slow");
            $(this).siblings().children("h1").stop().animate({height:"0"},"slow");
        },
        function () {
            $(".cjd-news-right-text h1").stop().animate({height:"0"},50);
        }
    );
    $('.cjd-news-left-list li').click(function () {
        $('.cjd-news-right-wrap>div').eq($(this).index()).show().siblings().hide();
    })
});