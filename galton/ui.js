build_galton();
run_galton();
$("#display_nd").change(function(){
    console.log($("#display_nd").prop("checked"));
    if($("#display_nd").prop("checked")==true){
        $("#nd_curve").show();
    }
    else{
        $("#nd_curve").hide();
    }
})