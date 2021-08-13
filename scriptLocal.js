/*  Página Local, Data e Horário */

document.getElementById("btn-prox-3").addEventListener("click", function(){ 

    var varLocal = document.getElementById("local").value;

    localStorage.setItem("varLocal", varLocal);


    var varData = document.getElementById("data").value;

    localStorage.setItem("varData", varData);


    var varHorario = document.getElementById("horario").value;

    localStorage.setItem("varHorario", varHorario);

    window.location.href = "4dados.html";
    
}); 
