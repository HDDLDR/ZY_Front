  // ==============>  轮播图List
	var MyDomain='http://localhost:3000/';
     $.ajax({
            type:'get',
            url:MyDomain+'HB/Home_bannerlist',
            database:'json',
            success:function(X){
                     console.log(X);
                     X.map((item,k)=>{
                     	$('#Banenr_List ul').append('<li><p><img src="'+MyDomain+'/images/Pic_'+item.picURL+'" alt="ZOE"/></p><div><h3>'+item.bTitle+'</h3><p>'+item.bTxt+'</p></div></li>')
                     })
                     	$('#Banenr_List ul').append('<li class="clear"></li>');
 			},error:function(){
              alert('出错了！');
            }
       })



  // ==============>  轮播图Txt 主题图
  var MyDomain='http://localhost:3000/';
     $.ajax({
            type:'get',
            url:MyDomain+'HB/Home_bannerPic',
            database:'json',
            success:function(X){
                     console.log(X);
                     X.map((item,k)=>{
                      $('.item').eq(k).prepend(`<img src="${MyDomain}/images/Pic_${item.picURL}" alt="ZoeDesign"  class="slide-image"/>`);
                      $('.item').eq(k).find('.slide-text').prepend(`<h1 data-animation="animated ${item.uTitleAnimate}">${item.bTitle}</h1><p data-animation="animated ${item.uConAnimate}">${item.bTxt}</p>`);
                     })
      },error:function(){
              alert('出错了！');
            }
       })
