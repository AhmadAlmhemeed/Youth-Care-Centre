/*glopa; $, alert, console*/
$(function () {
    'use strict';
    //links add active class
    $('.links li a').click(function (num){
        $(this).addClass('active').siblings().removeClass('active');
    });
    // number pluse to 
    function aa(num){
        var num1 = parseInt(num.html());
        num.html(0);
        setInterval(()=>{
            let num2 = parseInt(num.html());
            if(num2 < num1){
                num.html(num2 +1);
            }
            else{
            num2=0;
            }
        },10);
};
if( $(window).scrollTop()>= $('.cards').scrollTop()){
    aa($('.num'));
    aa($('.num1'));
    aa($('.num2'));
    aa($('.num3'));
};
//cards on scroll animation
$('.card-a4').waypoint(function(){
    $('.card-a4').addClass('animate__animated animate__fadeInLeftBig');
},{offset:'80%'});
$('.card-a2').waypoint(function(){
    $('.card-a2').addClass('animate__animated animate__fadeInUpBig');
},{offset:'80%'});
$('.card-a3').waypoint(function(){
    $('.card-a3').addClass('animate__animated animate__fadeInDownBig');
},{offset:'80%'});
$('.card-a1').waypoint(function(){
    $('.card-a1').addClass('animate__animated animate__fadeInRightBig');
},{offset:'80%'});
$('.new-drills .card').waypoint(function(){
    $('.new-drills .card').addClass('animate__animated animate__backInDown');
},{offset:'70%'});

$('.section-header').each(function(){
    $(this).waypoint(function(){
        $('.section-header').addClass('animate__animated animate__zoomInUp');
        $('.section-header ~ div .line').addClass('animate__animated animate__zoomIn');
    },{offset:'80%'});});
$('.section-header2').each(function(){
    $(this).waypoint(function(){
        $('.section-header2').addClass('animate__animated animate__zoomInUp');
        $('.section-header2 ~ div .line').addClass('animate__animated animate__zoomIn');
    },{offset:'80%'});});
$('.section-header3').each(function(){
    $(this).waypoint(function(){
        $('.section-header3').addClass('animate__animated animate__zoomInUp');
        $('.section-header3 ~ div .line').addClass('animate__animated animate__zoomIn');
    },{offset:'80%'});});

    
$('.card2:nth-child(1)').waypoint(function(){
    $('.card2:nth-child(1)').addClass('animate__animated animate__fadeInBottomRight');
},{offset:'80%'});
$('.card2:nth-child(2)').waypoint(function(){
    $('.card2:nth-child(2)').addClass('animate__animated animate__fadeInBottomLeft');
},{offset:'80%'});



});

