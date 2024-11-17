// document.getElementById('submitBtn').addEventListener('click', function(event){
    
//     event.preventDefault();
    
//     const email = document.getElementById('email').value.trim();
//     const senha = document.getElementById('senha').value.trim();

//     if(!email || !senha){
//         alert('Preencha os campos vazios.');
//         return;
//     }
//     else{
//         document.getElementById('userform').submit();
//     }

//     if(!email.includes('@') && !email.includes('.')){
//         alert('Por favor, preencha no formato de um e-mail incluindo "@" e "."');
//         return;
//     }
//     else{
//         document.getElementById('userform').submit();
//     }

//     //Imprimindo a mensagem de sucesso do login
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = 'Login preenchido com sucesso';
//     responseMessage.style.color = 'green';

//     //Limpando os campos
//     document.getElementById('email').value = '';
//     document.getElementById('senha').value = '';

// });

document.getElementById('submitBtn').addEventListener('click', function(event){
    
    event.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passError').style.display = 'none';

    document.getElementById('arroubapoint').style.display = 'none';
    document.getElementById('passmoreminus').style.display = 'none';

    let valid = true;
    
    if(!email){
        valid = false;
        document.getElementById('emailError').style.display = 'block';
    }
    else if(!email.includes('@') || !email.includes('.')){
        valid = false;
        document.getElementById('arroubapoint').style.display = 'block';
    }
    
    if(!senha){
        valid = false;
        document.getElementById('passError').style.display = 'block';
    }
    else if(senha.length < 6 || senha.length > 8){
        valid = false;
        document.getElementById('passmoreminus').style.display = 'block';
    }

    if(valid){
        document.getElementById('userform').submit();
        alert('Formulário preenchido com sucesso');
        return;
    }
    
});

document.getElementById('eyepass').addEventListener('click', function(event){

    event.preventDefault();

    const passwordInput = document.getElementById('senha');
    const eyeIcon = document.getElementById('eyes');

    const type = passwordInput.getAttribute('type') == 'password' ? 'text' : 'password';

    passwordInput.setAttribute('type', type);

    if(type === 'text'){
        eyeIcon.setAttribute('name', 'eye-off');
    }
    else{
        eyeIcon.setAttribute('name', 'eye');
    }
})