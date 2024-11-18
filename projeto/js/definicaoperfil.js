document.getElementById('submitBtn').addEventListener('click', function(event){

    event.preventDefault();

    const username = document.getElementById('nome').value.trim();
    const name = document.getElementById('nome').value.trim();
    const selectsexo = document.getElementById('selectsexo').value.trim();

    if(!username){
        
    }

});


document.getElementById('submitBtn').addEventListener('click', function(event){

    event.preventDefault();

    const dataInput = document.getElementById('data').value.trim();

    const hoje = new Date();
    const anoAtual = hoje.getFullYear;
    const mesAtual = String(hoje.getMonth() + 1).padStart(2, '0');
    const diaAtual = String(hoje.getDay() + 1).padStart(2, '0');
    dataInput.max = `${anoAtual}/${mesAtual}/${diaAtual}`;

    document.getElementById('definicaoform').onsubmit = function(event){
        event.preventDefault();

        const dataselecionada = new Date(dataInput.getFullYear);
        const idade = anoAtual - dataselecionada.getFullYear();


    }
});