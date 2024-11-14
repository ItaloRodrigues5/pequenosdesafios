document.addEventListener('keydown', function(event){
    const link = document.getElementById('loginlink').value.trim();

    link.textcontent = `Tecla pressionada:  ${event.key} (Código: ${event.code})`;

    if(event.key == 'Backspace' && !event.target.matches('input[submit]')){
        event.preventDefault();
        event.click();
    }
});