var n1 = Number(window.prompt("digite o nota 1: "))
var n2 = Number(window.prompt("digite o nota 1: "))

var media = (n1 + n2)/2

if (media == 10){
    document.write('Aprovado com Distinção. sua nota foi  ' + media)
}else if (media >= 7){
    document.write('Aprovado, sua nota foi, ' + media)
}else if (media < 7 ){
    document.write('Reprovado, sua nota foi, ' + media)
}else {
    alert("operanção invalida")
}
