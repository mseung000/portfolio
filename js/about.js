$(function(){
    $('.skill_contents ul li.btn_wrap .btn').click(function(){
        $('.skill_contents ul li.con p span').toggleClass('on');
    });

    $('.wrap').bind('wheel',function(e){
        e.preventDefault();
        if(e.originalEvent.wheelDelta>0 || e.originalEvent.detail<0){
            //휠을 올렸을 때
            var prev=$(this).prev().offset().top;
            $('html,body').stop().animate({'scrollTop':prev},1000,'swing');
        }else{
            //휠을 내렸을 때
            var next=$(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop':next},900,'swing');
        }
    });

    $('.notice span').fadeIn(1500);
    $('.notice').click(function(){
        $(this).fadeOut(500);
    });

    //스크롤 이벤트 (thing that i can do)
    $(window).scroll(function(){
        var st=$(this).scrollTop();
        
        if(st>=$('.what').offset().top-500){
            for(var i=0; i<$('.what').find('li').length; i++){
                $('.what').find('li').eq(i).addClass('on').css({'animation-delay':(0.2*i)+'s'});
            }
        }else{
            $('.what').find('li').removeClass('on');
        }
    });
});