var n1 = Number(window.prompt("digite o numero: "))
var n2 = Number(window.prompt("digite o numero: "))



if (n1 > n2){
 
    document.write('o numero maior é ' + n1 +'!')
}else if (n2 > n1){

    document.write('o numero maior é ' + n2 +'!')
}else {
    alert("invalido, digite apenas numero")
}
