$(document).ready(function() {
    var active = false;
    var setDistance = "0%";
    var rev=1;
    // Scroll to particular div.
    function scrollTo(divClick, divScrollTo) {
        var offset = $(divScrollTo).offset();
        $(divClick).on("click", function() {
            if(active) {
                return;
            } else {
                active = true;
                $("body").animate({
                    scrollTop: offset.top - 180
                }, 400, function() {
                    active = false;
                });
            }
        });
    }
    
    // Header side scroll button
    function appendSideScrollButton(divNumber,scrollDistance) {
        $("header>ul").append("<li id=\"scrollButton"+divNumber+"\"></li>");
        $("#scrollButton"+divNumber).on("click",function(){
            if(active){
                return;
            } else {
                $("header").css("background-position",scrollDistance);
                $("header>ul>li").css("background-color","rgba(255,255,255,1)");
                $(this).css("background-color","rgba(255,255,255,0.5)")
                setDistance = scrollDistance;
                active = false;
            }
        })
        }
    
    // Scroll header on set interval 
    setInterval(function(){
        if(setDistance == "0%"){
        $("#headerElement3,#headerElement2").fadeOut(800);
        $("#scrollButton2,#scrollButton3").css("background-color","rgba(255,255,255,1)");
        $("#scrollButton1").css("background-color","rgba(255,255,255,0.5)");
        $("header").css("background-position", setDistance);
        $("#headerElement1").fadeIn(800);
        setDistance = "50%";
    }
        else if(setDistance == "50%"){
            $("#headerElement1,#headerElement3").fadeOut(800);
            $("#scrollButton1,#scrollButton3").css("background-color","rgba(255,255,255,1)");
            $("#scrollButton2").css("background-color","rgba(255,255,255,0.5)");
            $("header").css("background-position", setDistance);
            $("#headerElement2").fadeIn(800);
            setDistance = "100%";
        }
        
        else if(setDistance == "100%"){
            $("#headerElement2,#headerElement1").fadeOut(800);
            $("#scrollButton1,#scrollButton2").css("background-color","rgba(255,255,255,1)");
            $("#scrollButton3").css("background-color","rgba(255,255,255,0.5)");
            $("header").css("background-position", setDistance);
            $("#headerElement3").fadeIn(800);
            setDistance = "0%";
        }
        
        
    }, 8000);
    
    // Reviews section 
    // with fadeIn and fadeOut
    // 8s duration
    setInterval(function(){
        if(rev == 1){
            $("#reviewsBox").fadeOut(800,function(){
            $("#reviewPicture>img").remove();
            $("#reviewComment").empty();
            $("#reviewPicture").html("<img src=\"images/palmer.jpg\">");
            $("#reviewComment").html("\"It was great to be able to park and fly without hassle\"<p>John Doe</p>");
            $("#reviewsBox").fadeIn(800);
            });
            rev = 2;
        }
        else if(rev == 2){
            $("#reviewsBox").fadeOut(800,function(){
            $("#reviewPicture>img").remove();
            $("#reviewComment").empty();
            $("#reviewPicture").html("<img src=\"images/palmer.jpg\">");
            $("#reviewComment").html("\"Fast efficient and walking distance to terminal, no fuss...\"<p>Bob Hart</p>");
            $("#reviewsBox").fadeIn(800);
            });
            rev = 3;
        }
        else if(rev == 3){
            $("#reviewsBox").fadeOut(800,function(){
            $("#reviewPicture>img").remove();
            $("#reviewComment").empty();
            $("#reviewPicture").html("<img src=\"images/palmer.jpg\">");
            $("#reviewComment").html("\"close to the terminals and easy to find\"<p>Andrew Cook</p>");
            $("#reviewsBox").fadeIn(800);
            });
            rev = 1;
        }
    },8000);
    
    // Localstorage
    $(".buy").on('click',function(){
        localStorage.setItem('exterior',$("#exterior").val());
        localStorage.setItem('interior',$("#interior").val());
        localStorage.setItem('dvd',$("#dvd").val());
        localStorage.setItem('airshow',$("#airshow").val());
        localStorage.setItem('fdr',$("#fdr").val());
        localStorage.setItem('cvr',$("#cvr").val());
        localStorage.setItem('adf',$("#adf").val());
    })
    
    // Display in order summary
    $("#exte").html("Exterior: " + localStorage.getItem('exterior'));
    $("#inte").html("Interior: " + localStorage.getItem('interior'));
    $("#dvdOrder").html("DVD Player: " + localStorage.getItem('dvd'));
    $("#airs").html("Airshow: " + localStorage.getItem('airshow'));
    $("#fdrOrder").html("FDR: " + localStorage.getItem('fdr'));
    $("#cvrOrder").html("CVR: " + localStorage.getItem('cvr'));
    $("#adfOrder").html("ADF: " + localStorage.getItem('adf'));

    // About us toggle button
    $('#more').toggle();
    $('#aboutus>h2').on('click',function(){
        $('#more').slideToggle();
    })
    
    // Append side scroll buttons
    appendSideScrollButton("1","0%");
    appendSideScrollButton("2","50%");
    appendSideScrollButton("3","100%");   
    
    // Assign scroll buttons
    scrollTo("#contact-button", "aside");
    scrollTo("#menu-button", "#order");
    scrollTo("#reviews-button", "#reviews");
    scrollTo("#local-button", "#localisation");
    scrollTo("#up-button", "body");
}) 