$('#showBtn').on('click',function(){
    $('.menu').removeClass('hide').addClass('show');
    reset ();
});
$('#closeBtn').on('click',function(){
    $('.menu').removeClass('show').addClass('hide');
    reset ();
});
$(window).resize(reset);
function reset () {
    if($(window).innerWidth() <= 992 && $('.menu').hasClass('show')){
        $('body').css('overflow','hidden');
        console.log(1)
    }else{
        $('body').css('overflow','auto');
    }
}
