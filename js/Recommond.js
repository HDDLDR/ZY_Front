
$(function () {
    var MyDomain='http://192.168.43.122:3000/';
    var MsgArr_A=[],MsgArr_B=[],MsgArr_C=[];
    //全部
    $.ajax({
        type:'post',
        url:MyDomain+'RC/msgList',
        success:function(X) {
            // console.log(X);
                // X.map((item,k)=>{
               for(var item of X){
                       if(item.newsType=='A'){
                            MsgArr_A.push(item);
                        }else if(item.newsType=='B'){
                            // ======>品牌故事
                            MsgArr_B.push(item);
                        }else if(item.newsType=='C'){
                            //======>行业资讯
                            MsgArr_C.push(item);
                        }
               }

                console.log(MsgArr_A,MsgArr_B,MsgArr_C);
                    meA();
                    meB();
                    meC();








        },
        error:function(){
            console.log("错误");
        }
    });



        function meA(){
            MsgArr_A.map((item,k)=>{
                // console.log(item.newsmouth)
 $('.cjd-news-right-wrap .rA').append('<div class="cjd-news-right-text clear"><h1 class="left"></h1><div class="cjd-news-right-text-data_A left clear">'+'<h5 class="left">'+item.newsmouth+'<br/>'+'<span>'+item.newsyears+'</span></h5>'+'<div class="cjd-news-right-text-new left">'+'<h4>'+item.newstitle+'</h4>'+ '<p>'+item.newscon+'</p>'+'</div>'+'<h2 class="left">→</h2></div></div>')
            })

        }

            function meB(){
                            MsgArr_B.map((item,k)=>{
                // console.log(item.newsmouth)
             $('.cjd-news-right-wrap .rB').append('<div class="cjd-news-right-text clear"><h1 class="left"></h1><div class="cjd-news-right-text-data1 left clear">'+'<h5 class="left"><h5 class="left">'+item.newsmouth+'<br/>'+'<span>'+item.newsyears+'</span></h5>'+
                                '<div class="cjd-news-right-text-new left">'+
                                '<h4>'+item.newstitle+'</h4>'+
                                '<p>'+item.newscon+'</p>'+
                                '</div>'+'<h2 class="left">→</h2></div></div>')
                        })
            }


                function meC(){
                  for(var i=0;i<MsgArr_C.length;i++){
                    $('.cjd-news-right-wrap .rC').append('<div class="cjd-news-right-text clear"><h1 class="left"></h1><div class="cjd-news-right-text-data2 left clear"><h5 class="left">'+MsgArr_C[i].newsmouth+'<br/>'+'<span>'+MsgArr_C[i].newsyears+'</span></h5>'+
                    '<div class="cjd-news-right-text-new left">'+
                    '<h4>'+MsgArr_C[i].newstitle+'</h4>'+
                    '<p>'+MsgArr_C[i].newscon+'</p>'+
                    '</div>'+'<h2 class="left">→</h2></div></div>'
                )
              }
   }





    $('.cjd-news-left-list li').click(function () {
        $('.cjd-news-right-wrap>div').eq($(this).index()).show().siblings().hide();
    })

});


