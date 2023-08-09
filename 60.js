$(document).ready(function(){

    $("input").keyup(function(){
        let zmienna = $("input").val();
        $("h1").html(zmienna);
    })
})
