var agora = new Date()
var hora = agora.getHours()
//var hora = 16
console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 05){
    console.log('Boa madrugada!')
}else if(hora <12){
    console.log('Bom dia!')
}else if(hora < 18){
    console.log('Boa tarde!')
}else if(hora < 23){
    console.log('Boa noite!')
}else{
    console.log('Hora invalida')
}