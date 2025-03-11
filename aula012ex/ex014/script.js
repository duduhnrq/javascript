function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('img');
    let data = new Date();
    let hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 4 && hora < 12) {
        //Bom dia!
        img.src = 'manha.png';
        document.body.style.backgroundColor = '#e2cd9f';
    } else if (hora >= 12 && hora < 15) {
        //Boa tarde!
        img.src = 'tarde1.png';
        document.body.style.backgroundColor = 'rgb(41, 135, 223)';
    } else if (hora >= 15 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde2.png';
        document.body.style.backgroundColor = '#f5b87d';
    } else {
        //Boa noite!
        img.src ='noite.png';
        document.body.style.backgroundColor = '#1c1c1c';
    }
}