function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    var nomeError = document.getElementById('nomeError');
    var emailError = document.getElementById('emailError');
    var mensagemError = document.getElementById('mensagemError');

    // Validar o campo nome
    if (nome === "") {
        nomeError.textContent = "Por favor, insira seu nome.";
        return false;
    } else {
        nomeError.textContent = "";
    }

    // Validar o campo email
    if (email === "") {
        emailError.textContent = "Por favor, insira seu email.";
        return false;
    } else {
        emailError.textContent = "";
    }

    // Validar o campo mensagem
    if (mensagem === "") {
        mensagemError.textContent = "Por favor, insira sua mensagem.";
        return false;
    } else {
        mensagemError.textContent = "";
    }

    return true; // Retorna true se todos os campos forem válidos
}

// Event listener para o evento submit do formulário
document.getElementById('forms').addEventListener('submit', function(event) {
    // Chama a função validarFormulario() ao enviar o formulário
    if (!validarFormulario()) {
        event.preventDefault(); // Impede o envio do formulário se houver erros de validação
    }
});