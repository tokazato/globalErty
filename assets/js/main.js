$(document).ready(function(){

//    $('.navDropDown a').hover(function(){
//        $('.dropDownContent li').slideDown('slow').css('display', 'flex');
//    }, function(){
//     $('.dropDownContent li').slideUp();
//    });


   var width = 0;
   $('.arrowLeft').on('click', function(){
       if(  width >= 0 ){
        $('.sliderContent').css('left', '0px')
        $(this).css('color', 'gray');
        return;
       }
       width += 100;
       $('.sliderContent').css('left', width + 'px');
       $('.arrowRight').css('color', '#1B1B1E');
   })
   $('.arrowRight').on('click', function(){
    if(  width <= -900 ){
        $('.sliderContent').css('left', '-900px')
        $(this).css('color', 'gray');
        return;
       }
    width -= 100;
    $('.sliderContent').css('left', width + 'px');
    $('.arrowLeft').css('color', '#1B1B1E');
})

// $('.dropDownContent li').hover(function(){
//     $('.greenBall').css('display', 'block');
// })

})
