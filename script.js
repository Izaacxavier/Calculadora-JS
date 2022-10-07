const resultado = document.querySelector('.resultado');
const confirmar = document.querySelector('.igual')

function insert(valor){
    resultado.innerHTML += valor;
}
function clean(){
    resultado.innerHTML =' ';
}
function backspace(){
    //se tiver conteudo no campo resultado será excluido um numero//
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML 
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
}
function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}