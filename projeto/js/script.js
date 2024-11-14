document.getElementById('submitBtn').addEventListener('click', function(){
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if(!email || !senha){
        alert('Preencha os campos vazios.');
        return;
    }

    if(!email.includes('@')){
        alert('Por favor, preencha no formato de um e-mail incluindo "@" e "."');
        return;
    }

    //Imprimindo a mensagem de sucesso do login
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Login preenchido com sucesso';
    responseMessage.style.color = 'green';

    //Limpando os campos
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';

})

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    const campos = document.querySelectorAll('input[required]');
    const button = documment.getElementById('subtmitBtn');

    function verificaFormularioPreenchido(){
        let formlarioPreenchido = false;

        campos.forEach((campo) => {
            if(!campo.value.trim()){
                formularioPreenchido = false;
            }
        });

        button.disable = !formularioPreenchido;
    }

        campos.forEach((campo) => {
            campo.addEventListener('input', verificaFormularioPreenchido);
        });

    function enviarFormulario(){
        if(!button.disable){
            form.submit();
        }
    }

    verificaFormularioPreenchido();
})