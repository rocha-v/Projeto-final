function tocaSom(seletorAudio){
    document.querySelector(seletorAudio).play();
}

document.querySelector('.toca_som').onclick = function(){
        tocaSom('#som_botao');
    }
    