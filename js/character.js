
$("#table_m").show();
$("#table_l").hide();


function select_m(){
    document.getElementById("side_div_m").classList.add("active");
    document.getElementById("side_div_l").classList.remove("active");
    document.getElementById("side_div_d").classList.remove("active");
    document.getElementById("side_div_s").classList.remove("active");
    $("#table_m").fadeIn();
    $("#table_l").hide();
    console.log("mmmm");

}

function select_l(){
    document.getElementById("side_div_m").classList.remove("active");
    document.getElementById("side_div_l").classList.add("active");
    document.getElementById("side_div_d").classList.remove("active");
    document.getElementById("side_div_s").classList.remove("active");
    $("#table_m").hide();
    $("#table_l").fadeIn();

}

function select_d(){
    document.getElementById("side_div_m").classList.remove("active");
    document.getElementById("side_div_l").classList.remove("active");
    document.getElementById("side_div_d").classList.add("active");
    document.getElementById("side_div_s").classList.remove("active");
}

function select_s(){
    document.getElementById("side_div_m").classList.remove("active");
    document.getElementById("side_div_l").classList.remove("active");
    document.getElementById("side_div_d").classList.remove("active");
    document.getElementById("side_div_s").classList.add("active");
}