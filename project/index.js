$( ".left-arrow" ).click(function() {
    $( ".holder-slider_top").animate({ "left": "-=150px" }, "slow" );

    $( ".holder-slider_bottom" ).animate({ "left": "-=150px" }, "slow" );

    if($(".arrow-default_left").attr("src") == "/project/Assets/arrow-gray-left.png"){
        $(".arrow-default_left").attr("src", "/project/Assets/arrow-blue-left.png");

        $(".arrow-default_right").attr("src", "/project/Assets/arrow-gray-right.png");
    }
    let i = 1;
while(i <= 9){
    $( ".holder-slider_top").append(`<img src="/project/Assets/slider-image-${i}.jpg"/>`);
    $( ".holder-slider_bottom").append(`<img src="/project/Assets/slider-image-${i}.jpg"/>`);
    i++;
}
}); 



 $( ".right-arrow" ).click(function() {
    $( ".holder-slider_bottom" ).animate({ "left": "+=150px" }, "slow" );

    $( ".holder-slider_top" ).animate({ "left": "+=150px" }, "slow" );

    if($(".arrow-default_right").attr("src") == "/project/Assets/arrow-gray-right.png"){
        $(".arrow-default_right").attr("src", "/project/Assets/arrow-blue-right.png");

        $(".arrow-default_left").attr("src", "/project/Assets/arrow-gray-left.png");
    } 
});



    


