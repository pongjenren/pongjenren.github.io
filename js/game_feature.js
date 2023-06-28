window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log("hi");
    if (document.documentElement.scrollTop > 30) {
        $("#navbar").css("top", "0px");
    } else {
        $("#navbar").css("top", "-100px");
    }
}

let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
//   mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
    if (mousePos.y < 70 || document.documentElement.scrollTop > 30){
        $("#navbar").css("top", "0px");
    } else {
        $("#navbar").css("top", "-100px");
    }
});

$("#home_bg").animate({"opacity":"100%"}, "slow");
$("#download_1").animate({"opacity":"100%"}, 1000);
$("#download_2").animate({"opacity":"100%"}, 1000);

$("body").hide();
$("body").ready(function() {
    console.log("hi");
    $("body").show();
});