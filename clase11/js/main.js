console.log('Hola mundo!');

//var anchoDiv = 100;

//eventos pt2

//esta funcion es para que el cuadro se haga mas grande de acuerdo al ancho de la pantalla
/* function pantalla() {
    var widthVentana = window.innerWidth;
    var heightVentana = window.innerHeight;
    anchoDiv++;
    document.getElementById('cuadro').style.width = anchoDiv + 'px';

}

window.onresize = pantalla */
// onresize se utiliza para cuando cambie las medidas de pantalla (window solo se refiere a la ventana)

/* 
var container  = document.getElementById('cuadro'); 
var snor = document.getElementById('snorlax');
var snor2 = document.getElementById('snorlax2');


container.addEventListener('dragover', allowDrop);
container.addEventListener('drop', drop);

snor.draggable = true
snor.addEventListener('dragstart', drag);

snor2.draggable = true
snor2.addEventListener('dragstart', drag);

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    console.log('Entro');
}

function drag(event) {
    event.dataTransfer.setData("text",event.target.id);
} */

var imagenes = [
    'imagen-0','imagen-1','imagen-2',
    'imagen-3','imagen-4','imagen-5',
    'imagen-6','imagen-7','imagen-8'
];

var rompe = document.getElementById('rompecabezas');
var piezas = document.getElementById('piezas');

var terminado = imagenes.length;

while (imagenes.length) {
    const index = Math.floor(Math.random() * imagenes.length);
            const div = document.createElement('div');
            div.className = 'pieza';
            div.id = imagenes[index];
            div.draggable = true;
            div.style.backgroundImage = `url("assets/${imagenes[index]}.jpg")`;
            piezas.appendChild(div);
            imagenes.splice(index, 1);
}

for (let index = 0; index < terminado; index++) {
    const div = document.createElement('div');
    div.className = 'placeholder';
    div.dataset.id = index;
    rompe.appendChild(div);
}

 piezas.addEventListener('dragstart', event =>{
     event.dataTransfer.setData('id', event.target.id);
 });

rompe.addEventListener('dragover', event =>{
    event.preventDefault()
    event.target.classList.add('hover')
});

rompe.addEventListener('dragleave', event =>{
    event.target.classList.remove('hover');
});

rompe.addEventListener('drop', event => {
    event.target.classList.remove('hover');

    var id = event.dataTransfer.getData('id');
    var numero = id.split('-')[1]


    if (event.target.dataset.id === numero) {
        event.target.appendChild(document.getElementById(id))

        terminado--;

        if (terminado === 0) {
           document.body.classList.add('ganaste')
           const music = new Audio('assets/Calibre 50 - Escuela Del Virus Antrax (Audio).mp3');
           music.play()
           document.getElementsByTagName('body').style.backdrop = 'none';
        }
    }
});