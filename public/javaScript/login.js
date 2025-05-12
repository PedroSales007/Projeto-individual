iniciou = false;

function login(event) {
 event.preventDefault()

 var emailVar = inputEmail.value;
 var senhaVar = inputSenha.value;

 if (iniciou == false) {
     iniciou = true;
     tentativas = 0;
 }

    if (emailVar == "" || senhaVar == "") {
        div_mensagem.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        return false;
    }
    else {
        setInterval(div_mensagem.innerHTML = "", 5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "aposLogin.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {
            while ((!resposta.ok) && tentativas < 3) {
                tentativas++;
                div_mensagem.innerHTML = `Credenciais incorretas. Tente novamente. Tentativa: ${tentativas}`;
                break;
            }
           
            if (tentativas >= 3) {
                div_mensagem.innerHTML = 'Máximo de 3 tentativas atingido. Tente novamente mais tarde.';
               desativarBotao()

            }
            
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function desativarBotao() {
    console.log("clicou");
  }
  
  let botao = document.getElementById("btnLogin");
  botao.addEventListener("click", minhaFuncao);
  
  // depois...
  botao.removeEventListener("click", minhaFuncao);