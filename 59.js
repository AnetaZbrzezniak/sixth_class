$(document).ready(function(){

    let ile = 0;

    $("img").mouseover(function(){
        ile++;
        $("#licznik").html(ile);
    })

})