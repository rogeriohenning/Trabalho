function tocaSomMario(){
    document.querySelector('#som_tecla_mario').play();
}
const listaDeTeclas= document.querySelectorAll('.tecla');
listaDeTeclas[1].onclick=tocaSomMario;

function tocaSomBrasil(){
    document.querySelector('#som_tecla_brasil').play();
}
document.querySelector('.tecla_brasil') .onclick=tocaSomBrasil;
