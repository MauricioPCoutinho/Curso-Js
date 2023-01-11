var agora = new Date()
var diaSem = agora.getDay()

//var diaSem = 6
//console.log(`Hoje é ${diaSem}`)

/* dias da semana js
0 = Domingo
1 = Seg
2 = Terça
3 = Quar
4 = Qui
5 = Sex
6 = Sab */

switch(diaSem){
    case 0:
        console.log("Hoje é Domingo")
        break
    case 1:
        console.log("Hoje é Segunda")
        break    
    case 2:
        console.log("Hoje é Terça")
        break
    case 3:
        console.log("Hoje é Quarta")
        break    
   case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
    default:
        console.log("Dia Inválido")
        break
}