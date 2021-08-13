// Print Cadastro - Conclusão de Cadastro 

    let finalServico = localStorage.getItem("varServico");
    let finalCategoria = localStorage.getItem("varCategoria");
    let finalLocal = localStorage.getItem("varLocal");
    let finalData = localStorage.getItem("varData");
    let finalHorario = localStorage.getItem("varHorario");
    let finalNome = localStorage.getItem("varNome");
    let finalSexo = localStorage.getItem("varSexo");
    let finalNascimento = localStorage.getItem("varNascimento");
    let finalCPF = localStorage.getItem("varCPF");
    let finalTelefone = localStorage.getItem("varTelefone");
    let finalEmail = localStorage.getItem("varEmail");

    let resumoCadastro = `<p><b>Serviço:</b> ${finalServico} <b>Categoria:</b> ${finalCategoria} </p>
    <p><b>Local:</b> ${finalLocal} <b>Data:</b> ${finalData} <b>Horário:</b> ${finalHorario} </p>
    <p><b>Nome:</b> ${finalNome} <b>Sexo:</b> ${finalSexo}</p> 
    <p><b>Nascimento:</b> ${finalNascimento}  <b>CPF:</b> ${finalCPF} </p>
    <p><b>Telefone:</b> ${finalTelefone} <b>Email:</b> ${finalEmail}</p>`;
    
    let finalDIV = document.getElementById("cadastroFinal")
    finalDIV.innerHTML = resumoCadastro

// Botão Confirmar - Salva o cadastro em localStorage

    document.getElementById("btn-confirmar").addEventListener("click",function(){
        
        if (localStorage.getItem("varDadosCadastrados") == null) {
            
            let noDados = { "06487895421" : [
                "Rodrigo Lopes",
                "Vacina AstraZeneca - 2ª dose", 
                "Entre 75 e 76 anos",
                "Posto de Saúde",
                "09/07/2021",
                "15:25",
                "Masculino",
                "09/07/2045",
                "34985245",
                "rodrigo.lopes@gmail.com",
            ]}

                noDados = JSON.stringify(noDados);
                localStorage.setItem("varDadosCadastrados", noDados);
                
            let atualDados = JSON.parse(localStorage.getItem("varDadosCadastrados"));
            let key = `${finalCPF}`;
            atualDados[key] = [
                    `${finalNome}`,
                    `${finalServico}`, 
                    `${finalCategoria}`,
                    `${finalLocal}`,
                    `${finalData}`,
                    `${finalHorario}`,
                    `${finalSexo}`,
                    `${finalNascimento}`,
                    `${finalTelefone}`,
                    `${finalEmail}`,
                    ]         
    
            atualDados = JSON.stringify(atualDados);
    
            localStorage.setItem("varDadosCadastrados", atualDados);
            
        }

        else {

            let atualDados = JSON.parse(localStorage.getItem("varDadosCadastrados"));
            let key = `${finalCPF}`;
            atualDados[key] = [
                    `${finalNome}`,
                    `${finalServico}`, 
                    `${finalCategoria}`,
                    `${finalLocal}`,
                    `${finalData}`,
                    `${finalHorario}`,
                    `${finalSexo}`,
                    `${finalNascimento}`,
                    `${finalTelefone}`,
                    `${finalEmail}`,
                    ]         
    
            atualDados = JSON.stringify(atualDados);
    
            localStorage.setItem("varDadosCadastrados", atualDados);

        }

        window.location.href = "1index.html";
        alert("Agendamento realizado com sucesso!");
        
    })