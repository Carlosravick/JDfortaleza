var nome = window.prompt("digite uma letra")

if (nome == 'm' || nome == 'M'){

    document.write('Masculino')

} else if (nome == 'f' || nome == 'F'){
    document.write('Feminino')
}else {
    alert('Sexo invalida')
}