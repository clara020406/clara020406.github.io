var galeria;
var btnTemaClaro;
var btnTemaOscuro;
var btnReset;
var botones;


function aplicarTemaClaro() {
    galeria.removeAttribute('style');
    galeria.className = 'tema-claro';
    quitarResaltadoBotones();
    btnTemaClaro.classList.add('botonActivo');
}


function aplicarTemaOscuro() {
    galeria.className = '';
    galeria.style.backgroundColor = '#343a40';
    galeria.style.padding = '15px';
    galeria.style.border = '2px solid #dc3545';
    galeria.style.borderRadius = '15px';
    galeria.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
    galeria.style.color = '#f8f9fa';

    galeria.style.display = 'flex';
    galeria.style.flexWrap = 'wrap';
    galeria.style.justifyContent = 'space-around';
    galeria.style.gap = '20px';


    quitarResaltadoBotones();
    btnTemaOscuro.classList.add('botonActivo');
}

function restablecerEstilos() {
    galeria.className = '';
    galeria.removeAttribute('style');


    quitarResaltadoBotones();
    btnReset.classList.add('botonActivo');


    setTimeout(() => {
        btnReset.classList.remove('botonActivo');
    }, 500);
}


function quitarResaltadoBotones() {
    botones.forEach(boton => {
        boton.classList.remove('botonActivo');
    });
}


botones.forEach(boton => {

    boton.addEventListener('mouseenter', function() {

        if (!this.classList.contains('botonActivo')) {
            this.classList.add('botonActivo');


            this.dataset.temporal = 'true';
        }
    });


    boton.addEventListener('mouseleave', function() {

        if (this.dataset.temporal === 'true') {
            this.classList.remove('botonActivo');
            this.dataset.temporal = 'false';
        }
    });
});

function inicializaReferencias(){
    galeria = document.getElementById('galeria');
    btnTemaClaro = document.getElementById('tema-claro');
    btnTemaOscuro = document.getElementById('tema-oscuro');
    btnReset = document.getElementById('reset-estilos');
    botones = document.querySelectorAll('button');


    btnTemaClaro.addEventListener('click', aplicarTemaClaro);
    btnTemaOscuro.addEventListener('click', aplicarTemaOscuro);
    btnReset.addEventListener('click', restablecerEstilos);
}


restablecerEstilos();
