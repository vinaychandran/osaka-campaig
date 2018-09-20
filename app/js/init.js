
// Set the date we're counting down to
var countDownDate = new Date("dec 5, 2018 15:37:25").getTime();

if($('.countdown').length > 0){
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        document.querySelector(".days").innerHTML = days;
        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".minutes").innerHTML = minutes;
        document.querySelector(".seconds").innerHTML = seconds;
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown").innerHTML = "EXPIRED";
        }

        document.query
    }, 1000);
}

// Wait for the DOM to be ready
$(function() {
    if($('#mainForm').length > 0){
        $("#mainForm").validate({
            rules: {   
                name: "required",
                "checkbox[]": {
                    required: true,
                    minlength: 1
                },
                email: {
                    required: true,        
                    email: true
                }
            },
            errorPlacement: function(error, element) {
            },
            success: function(label) {
               // alert(' success');
            },
            submitHandler: function(form) {
                $(".popup-first").hide();
                $(".popup-result").show();
                //form.submit();
            }
        });

        $( ".overlay" ).on( "click", function() {
            $(".osaka-campaign-popup, .osaka-price-popup, .osaka-price-complete").removeClass("show");
            $(this).hide();
            $(".popup-form-content").slideDown();
            $(".terms-back").hide();
            $(".terms-condition-content").hide('slow');
        });

        $( ".close-icon" ).on( "click", function() {
            $(".osaka-campaign-popup, .osaka-price-popup, .osaka-price-complete").removeClass("show");
           $(".overlay").hide();
           $(".popup-form-content").slideDown();
            $(".terms-back").hide();
            $(".terms-condition-content").hide('slow');
        });

        $(".gift-box-wrap").on( "click", function() {
            $(".osaka-campaign-popup").addClass("show");
            $(".overlay").show();
        });

        $(".update span").on( "click", function() {
            $(".osaka-price-popup").addClass("show");
            $(".overlay").show();
        });

         $("#popup-button").on( "click", function() {
            $(".popup-form-content").slideUp();
            $(".terms-back").show();
            $(".terms-condition-content").slideDown();
            $(".overlay").show();
        });

        $(".terms-back").on( "click", function() {
            $(".popup-form-content").slideDown();
            $(".terms-back").hide();
            $(".terms-condition-content").hide('slow');
        });
    }
});

if($('.campaign-slider').length > 0){
    // var getIndex = $('.campaign-slider').index();
    // console.log(getIndex);
    // var getCount = $('.campaign-slider').children().length;
    // console.log(getCount);
    $('.campaign-slider').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        lazyLoad: 'progressive',
    });
    // var i = getIndex;
    // $('.campaign-slider .number').text(i);
    // $('.campaign-slider .total').text(getCount);
    // $('.campaign-slider').on('init', function (event, slick, currentSlide, nextSlide) {
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $('.campaign-slider .number').text(i);
    //     $('.campaign-slider .total').text(slick.slideCount);
    // });
}