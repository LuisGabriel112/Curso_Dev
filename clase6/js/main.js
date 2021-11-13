/* console.log('Hola mundo!')

var element = '<div> Algo de texto </div>';

document.getElementsByTagName('body')[0].innerHTML = element; */

/* var element =  '<div><p> gato </p></div>'; */

/* 
var container = document.getElementsByTagName('main')[0]; 

var animals = [
    'Perro',
    'Gato',
    'Flamingo',
    'Pugberto',
    'Perico'
]



for (let index = 0; index < animals.length; index++) {
    var elemenet = document.createElement('div');
    elemenet.innerHTML = '<p>'+animals[index]+'</p>';
    container.appendChild(elemenet);
    
} */

var clasesV = [
    {
    Name: 'Bruja madre',
    Nivel: '(Nivel 10)',
    Img: 'https://apiwar.com/ups/uploads/26000083.png',
    Calidad: 'Legendaria',
    Tipo: 'Tropa',
    Descripcion: 'Con cada ataque, la bruja madre echa una maldición sobre las tropas enemigas.',
    Vida: '500',
    Daño: '80',
    Objetivos: 'De tierra y aire',
    Alcance: '3',
},
{
    Name: 'Mago electrico',
    Nivel: '(Nivel 9)',
    Img: 'https://cdn.statsroyale.com/images/cards/full/electro_wizard.png',
    Calidad: 'Legendaria',
    Tipo: 'Tropa',
    Descripcion: 'Aterriza con un estruendo, aturde a los enemigos cercanos y lanza rayos con ambas manos.',
    Vida: '500',
    Daño: '80',
    Objetivos: 'De tierra y aire',
    Alcance: '3'
},
{
    Name: 'Esqueletos',
    Nivel: '(Nivel 7)',
    Img: 'https://cdn.statsroyale.com/images/cards/full/skeletons.png',
    Calidad: 'Comun',
    Tipo: 'Tropa',
    Descripcion: 'Tres luchadores cuerpo a cuerpo rápidos y muy débiles. ¡Rodea a tus enemigos con este montón de huesos!',
    Vida: '56',
    Daño: '56',
    Objetivos: 'De tierra',
    Alcance: 'Cuerpo a cuerpo'
},  
{
    Name: 'Minero',
    Nivel: '(Nivel 11)',
    Img: 'https://cdn.statsroyale.com/images/cards/full/miner.png',
    Calidad: 'Legendaria',
    Tipo: 'Tropa',
    Descripcion: 'El minero es capaz de excavar un túnel para aparecer en cualquier lugar de la arena.',
    Vida: '1210',
    Daño: '193',
    Objetivos: 'Terrestres',
    Alcance: 'Cuerpo a cuerpo'
},
{
    Name: 'Recolector de elixir',
    Nivel: '(Nivel 8)',
    Img: 'https://cdn.statsroyale.com/images/cards/full/building_elixir_collector.png',
    Calidad: 'Especial',
    Tipo: 'Estructura',
    Descripcion: 'Para hacer elixir se necesita elixir. Esta estructura genera 8 gotas de elixir durante su tiempo de vida. No aparece en la primera mano de cartas.',
    Vida: '808',
    Daño: '-',
    Objetivos: '-',
    Alcance: '-'
},
{
    Name: 'Principe oscuro',
    Nivel: '(Nivel 9)',
    Img: 'https://cdn.statsroyale.com/images/cards/full/dark_prince.png',
    Calidad: 'Epica',
    Tipo: 'Tropa',
    Descripcion: 'El príncipe oscuro inflige daño de área y deja que su maza de púas hable por él.',
    Vida: '1030',
    Daño: '206',
    Objetivos: 'Terrestres',
    Alcance: 'Cuerpo a cuerpo'
},
{
    Name: 'Globo bombastico',
    Nivel: '(Nivel 14)',
    Img: 'https://cdn.statsroyale.com/images/cards/full/chr_balloon.png',
    Calidad: 'Epica',
    Tipo: 'Tropa',
    Descripcion: 'Aunque sean todo un espectáculo, no querrás ver aparecer estos globos bombásticos por el horizonte. ',
    Vida: '2226',
    Daño: '1272',
    Objetivos: 'Estructuras',
    Alcance: 'Cuerpo a cuerpo'
},
{
    Name: 'P.E.K.K.A.',
    Nivel: '(Nivel 6)',
    Img: 'https://cdn.statsroyale.com/images/cards/full/pekka.png',
    Calidad: 'Epica',
    Tipo: 'Tropa',
    Descripcion: 'Una luchadora cuerpo a cuerpo pesada y lenta. Se contonea ligeramente al andar, ¡pero atiza un puñetazo que no veas!',
    Vida: '2350',
    Daño: '510',
    Objetivos: 'Terrestres',
    Alcance: 'Cuerpo a cuerpo'
}
]




let index = 0


for ( index in clasesV) {
    var container =  document.getElementsByTagName('main')[0];

    console.log(typeof index,'log');

    var element = document.createElement('div');
    
    element.innerHTML = `
            <div class="card">
                <div class="title-c">
                    <h2> ${clasesV[index].Name} ${clasesV[index].Nivel}</h2>
                </div>
                <div class="img-desc">
                    <img src="${clasesV[index].Img}" alt="">
                    <div class="caldiad-type">
                        <h2 class="calidad">Calidad:</h2>
                        <p class="epica">${clasesV[index].Calidad}</p>
                        <h2 class="type">Tipo</h2>
                        <p class="tropa">${clasesV[index].Tipo}</p>
                        <p class="Desc">${clasesV[index].Descripcion}</p>
                    </div>
                </div>
                <div class="stats">
                    <div class="stats-in">
                        <div class="iconos">
                            <img class="vida-ico" src="https://cdn.statsroyale.com/images/attribs/hitpoints.png" alt="">
                            <img class="daño-ico" src="https://cdn.statsroyale.com/images/attribs/damage.png" alt="">
                            <img class="objetivos-ico" src="https://cdn.statsroyale.com/images/stats/target.png" alt="">
                            <img class="alcance-ico" src="https://cdn.statsroyale.com/images/stats/range.png" alt="">
                        </div>
                        <div class="stats-L">
                        <div><h2  class="Alcance">Alcance <br> ${clasesV[index].Alcance}</div>
                        <div><h2 class="Objetivos">Objetivos <br> ${clasesV[index].Objetivos}</div>
                        <div><h2 class="Daño">Daño <br> ${clasesV[index].Daño}</div>
                        <div><h2 class="vida">Vida <br> ${clasesV[index].Vida}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>`
    
    container.appendChild(element)
}



/* for (let index = 0; index < clasesV.length; index++) {
    console.log(index,'ola');
    console.log(clasesV[index].Name,'prueba');

}
 */

