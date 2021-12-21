'use strict'

//Lo que el 'use strict' hace es que si el codigo esta mal escrito te obliga a tener un mejor codigo
/* 
var perro = '';

perro = 'pug'; */

/* const frutas = [
    'Sandia ',
    'manzana ',
    'pera ',
    'platano ',
    'mandarina '                                                                                                                                                                                                                                                                                                                                                                                                                                                 
]

const frutas2 = {
   name: 'Sandia ',
    color :'Verde',
    peso:'136Kg'                                                                                                                                                                                                                                                                                                                                                                                                                                             
};

for (const iterator of frutas) {
    console.log(iterator)
} */

/* Con el for of no puedes iterar objetos pero con el for in si puedes iterar sobre propiedades
en un objeto */

/* for (const key in frutas2) {
    console.log(frutas2[key]);
} */

/* Esta seria la sintaxis para iterar sobre un objeto en el 
for in */

/* 
const obtenerUsuario = () => {
    let usuario = document.getElementById('nombre').value;
    return usuario;
}

const getDataUser = (info) => {
    console.log(info);
}

const enviar = document.getElementById('enviar');
enviar.addEventListener('click', function(event){
    event.preventDefault();//El prevent default es para que no se refresque la pagina

    getDataUser(obtenerUsuario())
}); */

const getData = () => document.getElementById('nombre').value;

const clearInput = () => document.getElementById('nombre').value = '';


const createToDo = (inputUser) => {

    const container = document.getElementsByTagName('section')[0];
    const element = document.createElement('div');
    const dltbtn = document.createElement('span');
    const icon1 = document.createElement('i');
    icon1.setAttribute('class','far fa-trash-alt')
    icon1.setAttribute('id','trashBtn')
    element.setAttribute('id','padre')
    dltbtn.setAttribute('class','dlt')
    dltbtn.setAttribute('id','padrebtn')

    element.innerHTML = `${inputUser}`;
    container.appendChild(element);
    element.appendChild(dltbtn);
    dltbtn.appendChild(icon1)
    clearInput();
}



const btnSend = document.getElementById('enviar');
btnSend.addEventListener('click', (event) => {
    event.preventDefault();
    createToDo(getData());
});

/* const dltBtn2 = document.getElementById('trashBtn');
dltBtn2.addEventListener('click', (event) => {
    console.log('Entre');
}); */
/*     trashBtn.addEventListener('click', (e) =>{
        const item = e.target.parentElement;
    }) */
