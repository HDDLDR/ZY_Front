	// ==============>  导航
	var MyDomain='http://localhost:3000/';
       $.ajax({
            type:'get',
            url:MyDomain+'menu/mylist',
            database:'json',
            success:function(X){
                     // console.log(X);
                     X.map((item,k)=>{
                        console.log(item.meURL);
                     	$('.menu_nav').append(`<li><a href="${item.meURL}">${item.content}</a><span></span></li>`);
                     });
                     $('.menu_nav li:eq(3)').append('<ul class="about_nav "><li><a href="html/CJD-about.html">集团简介</a></li><li><a href="html/CJD-team.html">企业团队</a></li><li><a href="html/CJD-talents.html">招聘人才</a></li></ul>')


			$('.menu_nav li:eq(3)').mouseover(function(){
				$('.about_nav').addClass('animated bounceIn');
				$('.about_nav').removeClass('fadeOut');
				$('.about_nav').css('zIndex','100');
			})

			$('.menu_nav li:eq(3)').mouseout(function(){
				$('.about_nav').removeClass('bounceIn');
				$('.about_nav').addClass('fadeOut');
				$('.about_nav').css('zIndex','0');
			});

            },
            error:function(){
              alert('出错了！');
            }
       })

// ==============>  底部  公司信息
       $.ajax({
            type:'get',
            url:MyDomain+'ZoeFooter/CPY_info',
            database:'json',
            success:function(x){
                     // console.log(x);
                     x.map((item,k)=>{
                     	$('.companyInfo dl').prepend(`<dt>${item.cpyName}</dt><dd>地址：${item.cpyAddress}</dd>
                     		<dd>邮编：${item.Y_code}</dd>
                     		<dd>手机：${item.cpyTel}</dd>
                     		<dd>电话：${item.	cpyPhone}</dd>
                     		<dd>传真：${item.CZ}</dd>
                     		<dd>邮编：${item.cpyEmail}</dd> `)
                     });

            },
            error:function(){
              alert('出错了！');
            }
       })


// ==============>  底部  公司信息
$('form').submit(function(e){
			var ev=e||window.event;
			if(ev.preventDefault){
					ev.preventDefault()
			}else{
					ev.returnValue=false;
			}
	$.ajax({
            type:'post',
            url:MyDomain+'ZoeFooter/USER_info',
            database:'json',
            data:{
            	'uName':$('.uName').val(),
            	'uPhone':$('.uPhone').val(),
            	'uEmail':$('.uEmail').val(),
            	'uContent':$('.textarea').text()
            },
            success:function(x){
                     console.log(x);
            },
            error:function(){
              alert('出错了！');
            }
       })
})


