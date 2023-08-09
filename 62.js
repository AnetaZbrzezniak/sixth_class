$(document).ready(function(){

    $("#ukryj").click(function(){
    $("#blokTestowy").hide(3000);
    })

    $("#pokaz").click(function(){
    $("#blokTestowy").show(3000);
    })

    $("#sDown").click(function(){
    $("#blokTestowy").slideDown(3000);
    })

    $("#sUp").click(function(){
    $("#blokTestowy").slideUp(3000);
    })

    $("#fIn").click(function(){
    $("#blokTestowy").fadeIn(3000);
    })

    $("#fOut").click(function(){
    $("#blokTestowy").fadeOut(3000);
    })
})
