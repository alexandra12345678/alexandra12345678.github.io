function hamburgerClick(event) {
    $(".mobile-menu").slideToggle(500);
    

}
function moreClick(event, cardNumber) {
    event.preventDefault();
    cardNumber = cardNumber || "";

    var itemWindow = document.querySelector(".item-window"+ cardNumber);
    var display =  itemWindow.style.display ;
  if (display=="none" || display == ""){
    $(".item-window"+cardNumber).fadeIn(1000);
itemWindow.style.display="flex";
    }  else {
        $(".item-window").fadeOut(1000);
}
}
var hamburgerIcon = document.getElementsByClassName("menu-icon")[0];
hamburgerIcon.addEventListener("click", hamburgerClick);

var moreIcon = document.getElementsByClassName("card-button")[1];
moreIcon.addEventListener("click", moreClick);

//var closeIcon = document.getElementsByClassName("item-close")[0];
//closeIcon.addEventListener("click", moreClick);

$(".item-close").click(function() {
    $(".item-window").fadeOut();
}
);

$(".card-button.first").click(
    function(event) {
        moreClick(event,".first")
    }
);

$(".card-button.second").click(
    function(event) {
        moreClick(event,".second")
    }
);

$(".card-button.third").click(
    function(event) {
        moreClick(event,".third")
    }
);


$(".card-button.fourth").click(
    function(event) {
        moreClick(event,".fourth")
    }
);

$(".main-href").click(function() {
    $("html, body").animate({
        scrollTop:0
    },1000);
}
);
