var n1 = Number(window.prompt("digite o numero"))
var n2 = Number(window.prompt("digite o numero"))
var n3 = Number(window.prompt("digite o numero"))

if (n1 > n2 && n1 > n3){

    document.write('o numero maior é ' + n1 + '!')
}else if (n2 > n1 && n2 > n3) {

    document.write('o numero maior é ' + n2 + '!')

}else if (n3 > n1 && n3 > n2 ){
    document.write('o numero maior é '+ n3 + '!')
} else {
    alert('operação invalida')
}