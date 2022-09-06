function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contator = 0 

while (contator < listaDeTeclas.length) { 

    const tecla = listaDeTeclas[contator];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    console.log(instrumento);

    tecla.onclick = function () {
        tocaSom(idAudio);

    }

    contator ++

    console.log(contator);



}

