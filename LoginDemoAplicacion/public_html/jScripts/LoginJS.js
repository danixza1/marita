

$(document).ready(function (){
    $("#login").click(function (){
        var user = $("#user").val();
        var clave = $("#clave").val();
        
        if( user==''|| clave ==''){
            alert("por favor complete los campos.........")
        }
    });
    
});
