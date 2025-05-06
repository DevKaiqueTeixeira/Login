
let listaCadastro = JSON.parse(localStorage.getItem("@ListaTarefas")) || [];

function Cadastrar(event) {
    event.preventDefault();



    let nome1 = document.getElementById('nomeCadastro');
    let email1 = document.getElementById('emailCadastro');
    let senha1 = document.getElementById('senhaCadastro');

    listaCadastro.push({ nome: nome1.value, email: email1.value, senha: senha1.value });
    document.getElementById('nomeCadastro').value = "";
    document.getElementById('emailCadastro').value = "";
    document.getElementById('senhaCadastro').value = "";
    salvarDados();
    alert("Cadastrado com sucesso");
    window.location.href = 'login.html';
}


//  document.getElementById('meuLink').onclick = function () {

//      limparButton();
// };


//  function limparButton() {

//  login();

//    let editButton = document.getElementById('editbutton');
//      editButton.remove;

//      let excluirButton = document.getElementById('excluirbutton');

//      excluirButton.remove;



//  }

function salvarDados() {
    localStorage.setItem("@ListaTarefas", JSON.stringify(listaCadastro))
}

function login() {
    event.preventDefault();




    let nomeLogin = document.getElementById('nomeLogin').value.trim();
    let senhaLogin = document.getElementById('senhaLogin').value.trim();

    // Recupera a lista de usuários cadastrados do localStorage usando a chave correta
    let listaCadastro = JSON.parse(localStorage.getItem("@ListaTarefas")) || [];

    if (nomeLogin === '' || senhaLogin === '') {
        alert("Digite nome e senha");
        return;
    }

    let usuarioEncontrado = listaCadastro.find(usuario =>
        usuario.nome === nomeLogin &&
        usuario.senha === senhaLogin
    );

    // Adiciona logs para verificar os dados
    console.log('Dados cadastrados:', listaCadastro);
    console.log('Usuário encontrado:', usuarioEncontrado);

    if (usuarioEncontrado) {
        alert("Login efetuado");

        let indiceUsuario = listaCadastro.findIndex(usuario =>
            usuario.nome === nomeLogin &&
            usuario.senha === senhaLogin
        );


        let mostrarSenha = usuarioEncontrado.senha;

        let mostrarNome = usuarioEncontrado.nome;
        let mostrarEmail = usuarioEncontrado.email;

        if (listaCadastro[indiceUsuario].sobre = '') {
            listaCadastro[indiceUsuario].sobre = "Não há nenhuma informação sobre você, adicone agora !"
            window.location.href = `sobre.html?nome=${encodeURIComponent(mostrarNome)}&senha=${encodeURIComponent(mostrarSenha)}&email=${encodeURIComponent(mostrarEmail)}&index=${encodeURIComponent(indiceUsuario)}&sobre=${encodeURIComponent(listaCadastro[indiceUsuario].sobre)}`;

        }
        window.location.href = `sobre.html?nome=${encodeURIComponent(mostrarNome)}&senha=${encodeURIComponent(mostrarSenha)}&email=${encodeURIComponent(mostrarEmail)}&index=${encodeURIComponent(indiceUsuario)}&sobre=${encodeURIComponent(listaCadastro[indiceUsuario].sobre)}`;
    } else {
        alert("Não foi possível fazer o login");
    }
}




function adicionarSobre(index) {
    let listaCadastro = JSON.parse(localStorage.getItem("@ListaTarefas")) || [];

    let nomeLogin = document.getElementById('nomeLogin').value.trim();

    // Verifique se o índice é válido
    if (index >= 0 && index < listaCadastro.length) {
        listaCadastro[index].sobre = nomeLogin;

        localStorage.setItem("@ListaTarefas", JSON.stringify(listaCadastro));

        alert("Sobre mim adicionado: " + listaCadastro[index].sobre);

        // Redirecionando para sobre.html com a URL atualizada
        window.location.href = `sobre.html?nome=${encodeURIComponent(listaCadastro[index].nome)}&senha=${encodeURIComponent(listaCadastro[index].senha)}&email=${encodeURIComponent(listaCadastro[index].email)}&index=${encodeURIComponent(index)}&sobre=${encodeURIComponent(listaCadastro[index].sobre)}`;
    } else {
        alert("Índice inválido.");
    }
}

// function mostrarnewpage(mostrarNome, mostrarEmail, mostrarSenha, indiceUsuario) {

//     window.location.href = 'sobre.html';

//     let nome = document.createElement('p');

//     // Definindo o conteúdo de texto da tag <p>
//     nome.textContent = mostrarNome;

//     // Adicionando a tag <p> dentro do elemento com o ID 'container'
//     document.getElementById('container').appendChild(nome);

// }



function editar(nome, senha, email) {
    event.preventDefault();

    let nomeLogin = document.getElementById('nomeLogin').value.trim();
    let senhaLogin = document.getElementById('senhaLogin').value.trim();


    let listaCadastro = JSON.parse(localStorage.getItem("@ListaTarefas")) || [];

    console.log("Conteúdo de listaCadastro:", listaCadastro);

    // Verificação se o nome e email correspondem
    let indiceUsuario = listaCadastro.findIndex(usuario =>
        usuario.nome === nome &&
        usuario.email === email
    );



    if (nomeLogin === '' || senhaLogin === '') {
        alert("Insira dados para edição");
        return;
    }

    if (indiceUsuario !== -1) {
        // Editar o usuário existente
        listaCadastro[indiceUsuario] = {
            ...listaCadastro[indiceUsuario], // Mantém as propriedades existentes
            nome: nomeLogin, // Atualiza o campo "nome" com o novo nome
            senha: senhaLogin // Atualiza o campo "senha" com a nova senha
        };

        // Atualizar o localStorage com o array modificado
        localStorage.setItem("@ListaTarefas", JSON.stringify(listaCadastro));

        alert("Dados atualizados com sucesso!");
        console.log("Array atualizado:", listaCadastro); // Exibe o array atualizado no console

        alert("Alterado com Sucesso, faça login para ver as novas atualizações");
        window.location.href = 'login.html';
    } else {
        alert("Usuário não encontrado!");
    }
}

function mostrarInformacoesUsuario(usuarioEncontrado, indiceUsuario) {
    event.preventDefault();
    let but = document.getElementById('meuBotao');

    but.remove();




    document.getElementById('h1').textContent = `Bem vindo !!!`
    document.getElementById('h2').textContent = ` ${usuarioEncontrado.nome}`;
    document.getElementById('h3').textContent = ` ${usuarioEncontrado.email}`;


    var logintexto = document.getElementById('nomeLogin');
    var senhatexto = document.getElementById('senhaLogin');

    logintexto.value = "";
    senhatexto.value = "";


    logintexto.placeholder = "Digite nome para editar";
    senhatexto.placeholder = "Digite senha para editar";


    let newButton = document.createElement('button');

    // Definir um ID para o novo botão (opcional, mas útil se precisar referenciá-lo novamente)
    newButton.id = 'editbutton';

    // Adicionar texto ao botão
    newButton.textContent = 'Edit';

    document.getElementById('form').appendChild(newButton);

    newButton.addEventListener('click', function () {
        editar();
        // Coloque aqui a lógica que você deseja executar quando o botão for clicado
    });



    // Altera o placeholder dos inputs


    //  COMANDO PARA EDITAR




    // document.getElementById('labelNome').textContent = "";
    // document.getElementById('labelSenha').textContent = "";


    // // Obtém os elementos de input
    // let inputLogin = document.getElementById('nomeLogin');
    // let inputSenha = document.getElementById('senhaLogin');

    // // Define o valor dos inputs para uma string vazia


    // // Altera o placeholder dos inputs
    // inputLogin.placeholder = "Editar Nome";
    // inputSenha.placeholder = "Editar Senha";












}













function recuperarDados(indice) {


    // Exibe o índice passado para a função

    // window.location.href = 'sobre.html';

    // var h1 = document.getElementById('h1');

    // h1.innerHTML = "testeeeeeeeeeeeeee";



    // // Recupera o array do localStorage
    // let listaCadastro = JSON.parse(localStorage.getItem("@ListaTarefas")) || [];

    // if (indice < 0 || indice >= listaCadastro.length) {
    //     console.error("Índice inválido:", indice);
    //     alert("Índice inválido. O índice está fora do intervalo.");
    //     return;
    // }


    // if (listaCadastro[indice].status === "Primeira") {
    //     alert("Já esteve aq né");


    // } else {


    //     // Exibe o array antes da modificação para depuração
    //     console.log("Array antes da modificação:", listaCadastro);

    //     // Verifica se o índice é válido

    //     // Atualiza o objeto no índice específico para adicionar o novo campo
    //     listaCadastro[indice] = { ...listaCadastro[indice], status: "Primeira" };

    //     // Salva o array atualizado no localStorage
    //     localStorage.setItem("@ListaTarefas", JSON.stringify(listaCadastro));

    //     // Exibe o array atualizado no console para verificação


    // }



}

