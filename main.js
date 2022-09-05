function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contator = 0 

while (contator < listaDeTeclas.length) { 
    listaDeTeclas[contator].onclick = tocaSom;

    contator ++

    console.log(contator);



}

