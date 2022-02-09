$(function(){
    $('.wrap article div.image').click(function(){
        $(this).fadeOut();
        $(this).next('.txt').fadeIn();
    });
    
    $('.wrap article div.txt').click(function(){
        $(this).fadeOut();
        $(this).prev('.image').fadeIn();
    });
}); // ready end