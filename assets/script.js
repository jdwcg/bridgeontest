$(function(){
    $('.popup, .popBg').hide();
    $('#view').click(function(){
        $('.popup, .popBg').show();
    });
    $('.popBg, .popup > i').click(function(){
        $('.popup, .popBg').hide();
    });

    $('#view1').click(function(){
        $('.popup1, .popBg').show();
    });
    $('#view2').click(function(){
        $('.popup2, .popBg').show();
    });

    $('.acc ~ ul').hide();

    $('.acc1').click(function(e){
        e.preventDefault();
        $('.acc1 ~ ul').slideToggle();
        $('.acc2 ~ ul').hide(); $('.acc3 ~ ul').hide(); $('.acc4 ~ ul').hide(); $('.acc5 ~ ul').hide(); $('.acc6 ~ ul').hide();
    });
    $('.acc2').click(function(e){
        e.preventDefault();
        $('.acc2 ~ ul').slideToggle();
        $('.acc1 ~ ul').hide(); $('.acc3 ~ ul').hide(); $('.acc4 ~ ul').hide(); $('.acc5 ~ ul').hide(); $('.acc6 ~ ul').hide();
    });
    $('.acc3').click(function(e){
        e.preventDefault();
        $('.acc3 ~ ul').slideToggle();
        $('.acc1 ~ ul').hide(); $('.acc2 ~ ul').hide(); $('.acc4 ~ ul').hide(); $('.acc5 ~ ul').hide(); $('.acc6 ~ ul').hide();
    });
    $('.acc4').click(function(e){
        e.preventDefault();
        $('.acc4 ~ ul').slideToggle();
        $('.acc1 ~ ul').hide(); $('.acc2 ~ ul').hide(); $('.acc3 ~ ul').hide(); $('.acc5 ~ ul').hide(); $('.acc6 ~ ul').hide();
    });
    $('.acc5').click(function(e){
        e.preventDefault();
        $('.acc5 ~ ul').slideToggle();
        $('.acc1 ~ ul').hide(); $('.acc2 ~ ul').hide(); $('.acc3 ~ ul').hide(); $('.acc4 ~ ul').hide(); $('.acc6 ~ ul').hide();
    });
    $('.acc6').click(function(e){
        e.preventDefault();
        $('.acc6 ~ ul').slideToggle();
        $('.acc1 ~ ul').hide(); $('.acc2 ~ ul').hide(); $('.acc3 ~ ul').hide(); $('.acc4 ~ ul').hide(); $('.acc5 ~ ul').hide();
    });
});