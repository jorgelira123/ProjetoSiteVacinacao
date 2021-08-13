/*  Página Nome, Sexo, Nascimento, CPF, Telefone, E-mail */

document.getElementById("btn-prox-4").addEventListener("click", function(){ 

    var varNome = document.getElementById("nome").value;

    localStorage.setItem("varNome", varNome);


    var varSexo = document.getElementById("sexo").value;

    localStorage.setItem("varSexo", varSexo);


    var varNascimento = document.getElementById("nascimento").value;

    localStorage.setItem("varNascimento", varNascimento);


    var varCPF = document.getElementById("cpf").value;

    localStorage.setItem("varCPF", varCPF);


    var varTelefone = document.getElementById("telefone").value;

    localStorage.setItem("varTelefone", varTelefone);
    

    var varEmail = document.getElementById("email").value;

    localStorage.setItem("varEmail", varEmail);


    window.location.href = "final.html";

}); 

