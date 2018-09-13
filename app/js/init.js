
// Set the date we're counting down to
var countDownDate = new Date("dec 5, 2018 15:37:25").getTime();

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

// Wait for the DOM to be ready
$(function() {

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
        $(".osaka-campaign-popup").removeClass("show");
        $(this).hide();
    });

    $(".gift-box-wrap").on( "click", function() {
        $(".osaka-campaign-popup").addClass("show");
        $(".overlay").show();
    });
});