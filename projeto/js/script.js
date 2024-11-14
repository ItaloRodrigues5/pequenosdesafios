document.getElementById('submitBtn').addEventListener('click', function(){
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if(!email || !senha){
        alert('Preencha os campos vazios.');
        return;
    }
    else{
        document.getElementById('userform').submit();
    }

    if(!email.includes('@') || !email.includes('.')){
        alert('Por favor, preencha no formato de um e-mail incluindo "@" e "."');
        return;
    }
    else{
        document.getElementById('userform').submit();
    }

    //Imprimindo a mensagem de sucesso do login
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Login preenchido com sucesso';
    responseMessage.style.color = 'green';

    //Limpando os campos
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';

});