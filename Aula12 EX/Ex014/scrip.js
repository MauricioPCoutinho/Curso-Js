function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 22
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >=0 && hora <12){
    //bom dia
    img.src = "dia.jpg"
    document.body.style.background = "#FFDEAD"
}else if(hora >=12 && hora <=18){
    //boa tarde
    img.src = "tarde.jpg"
    document.body.style.background = "#CD853F"
}else{
    //Boa noite
    img.src = "noite.jpg"
    document.body.style.background = "#483D8B"
}
}
