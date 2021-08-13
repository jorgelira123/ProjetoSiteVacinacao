

document.getElementById("btn-prox-2").addEventListener("click", function(){ 

    var varCategoria = document.getElementById("categoria").value;

    localStorage.setItem("varCategoria", varCategoria);


    var varServico = document.getElementById("servico").value;

    localStorage.setItem("varServico", varServico);

  
    window.location.href = "3local.html";

}); 
