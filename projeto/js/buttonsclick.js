document.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById('audiobutton');
    const icon = document.getElementById('volumeicon');
    const audioPlayer = document.getElementById('audioplayer');

    audioPlayer.loop = true;
    
    button.addEventListener('click', () => {
        if(icon.getAttribute('name') == 'volume-high'){
            icon.setAttribute('name', 'volume-off');
            audioPlayer.pause();
            console.log('ícone mudado para ficar sem som');
        }
        else{
            icon.setAttribute('name', 'volume-high');
            audioPlayer.play();
            console.log('Ícone mudado para ter som');
        }
    });

});
