$(document).ready(function(){
    $('#search-input').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('#search-list a').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });        
    });
});

//CALCULADORA
function multiplicar() {
    var duracion = 23; //duracion de anime
    var cantidadEP = document.getElementById("cantidadEP").value;
    var resultado = duracion *  cantidadEP;
    document.getElementById("resultado").value = "Minutos: " + resultado;
    document.getElementById('minAnime').value = "Duracion: " +duracion;
}
  
function resetear()
{
    var cantidadEP = document.getElementById('cantidadEP').value;
    var resultado = document.getElementById('resultado').value;

    if (resultado != "")
    {
        document.getElementById('nombre').value = "";
        document.getElementById('cantidadEP').value = "";
        document.getElementById('resultado').value = "";
        document.getElementById('minAnime').value = "";
    }
}