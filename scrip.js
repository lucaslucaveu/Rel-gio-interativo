function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if(hora>=0 && hora<12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background ='#cfe5f2';
            }else if(hora>=12 && hora<18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background ='#fd9f3f';
       
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background ='#1f2630';

    }
}