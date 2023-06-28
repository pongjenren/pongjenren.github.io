$(".btn").each(function(){
    $(".btn").addClass("active");
})

$('.btn').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
        hide_row($(this).val());
    } else {
        $(this).addClass('active')
        show_row($(this).val());
    }
    $(this).css("z-index", 1)
});


function show_row(class_name){
    console.log(class_name);
    $(".artifact_row").each(function(){
        if($(this).hasClass(class_name)){
            $(this).removeClass('hide');
        }
    })
}

function hide_row(class_name){
    $(".artifact_row").each(function(){
        if($(this).hasClass(class_name)){
            $(this).addClass('hide');
        }
    })
}