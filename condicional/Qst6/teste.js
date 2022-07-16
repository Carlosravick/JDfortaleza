var n1 = Number(window.prompt("digite o numero"))
var n2 = Number(window.prompt("digite o numero"))
var n3 = Number(window.prompt("digite o numero"))

if (n1 > n2 && n1 > n3 ){
    var maior = n1 
}else if (n2 > n1 && n2 > n3){
    var maior = n2
}else if (n3 > n1 && n3 > n2){
    var maior = n3
}else {
    alert("operança invalida")
}

if (n1 < n2 && n1 < n3 ){
    var menor = n1 
}else if (n2 < n1 && n2 < n3){
    var menor = n2
}else if (n3 < n1 && n3 < n2){
    var menor = n3
}else {
    alert("operança invalida")
}


document.write(`o numero maior é ${maior} e o numero menor é ${menor}`)

