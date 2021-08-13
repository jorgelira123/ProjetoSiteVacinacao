
document.getElementById("btn-consulta").addEventListener("click", function(){ 

    let userInput = document.getElementById("consultaCPF").value;

    let atualDados = JSON.parse(localStorage.getItem("varDadosCadastrados"));

    let resultConsulta = atualDados[userInput];

    if (resultConsulta !== undefined) {
      
        // Print Consulta de Cadastro

        let finalNome = resultConsulta[0];
        let finalServico = resultConsulta[1];
        let finalCategoria = resultConsulta[2];
        let finalLocal = resultConsulta[3];
        let finalData = resultConsulta[4];
        let finalHorario = resultConsulta[5];
        let finalSexo = resultConsulta[6];
        let finalNascimento = resultConsulta[7];
        let finalTelefone = resultConsulta[8];
        let finalEmail = resultConsulta[9];

        let resumoCadastro = `<p><b>Serviço:</b> ${finalServico} <b>Categoria:</b> ${finalCategoria} </p>
        <p><b>Local:</b> ${finalLocal} <b>Data:</b> ${finalData} <b>Horário:</b> ${finalHorario} </p>
        <p><b>Nome:</b> ${finalNome} <b>Sexo:</b> ${finalSexo}</p> 
        <p><b>Nascimento:</b> ${finalNascimento}  <b>CPF:</b> ${userInput} </p>
        <p><b>Telefone:</b> ${finalTelefone} <b>Email:</b> ${finalEmail}</p>`;

        let finalDIV = document.getElementById("divConsulta");
        finalDIV.innerHTML = resumoCadastro
     }

     else {
        let msgErroCPF = `<p><b>CPF não encontrado.</b></p>`
        let finalDIV = document.getElementById("divConsulta");
        finalDIV.innerHTML = msgErroCPF

     }

})
