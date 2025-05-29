function home() {
    window.location = 'index.html'
}

function cadastrar(event) {
    event.preventDefault()
    var nomeVar = inputNome.value
    var emailVar = inputEmail.value
    var senhaInput = inputSenha
    var senhaVar = inputSenha.value
    var confirmarSenha = inputConfirmarSenha.value

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmarSenha == "") {
        div_mensagem.innerHTML = `<p>Preencha os campos corretamente</p>`
        return  
    }

    if (senhaVar != confirmarSenha) {
        div_mensagem.innerHTML = `<p>Senha Incorreta</p>`
        senhaInput.focus()
    } else {
        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    div_mensagem.innerHTML = `<p>Cadastro Realizado</p>`;

                    setTimeout(() => {
                        window.location = "login.html";
                    }, "2000");

                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

        return false;
    }
}


function nome() {
    var nome = inputNome.value

    if (nome.length < 9) {
        div_mensagem.innerHTML = `<p>Digite o nome completo</p>`
    } else {
        div_mensagem.innerHTML = ``

    }
}
function email() {
    var email = inputEmail.value

    if (email.includes('@') == false) {
        div_mensagem.innerHTML = `<p >Email incorreto '@'</p>`
    } else {
        div_mensagem.innerHTML = ``

    }
}
function senha() {
    var senha = inputSenha.value

    if (senha.length < 8) {
        div_mensagem.innerHTML = `<p>Mínimo 8 digitos</p>`
    } else {
        div_mensagem.innerHTML = ``

    }
}

