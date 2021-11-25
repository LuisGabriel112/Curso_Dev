console.log('!Hello world');

//funciones

/* function user (){
    var nombre = prompt('Cual es tu nombre?');
    var edad = prompt('Cual es tu edad?')
    //console.log(nombre);
    bienvenida(nombre, edad);
} */

/* function bienvenida(nombre, edad){
    document.write('Bienvenido ' + nombre)
    document.write('<br> tienes ' + edad + ' Años')

    function perfil(){
        document.getElementsByTagName('body')[0].innerText = '';

    }

    setTimeout(function(){
       perfil();
    },2000);
} */

function numeros(nums){
    switch (nums) {
        case 0:
                document.getElementById('disp').innerText = 1;
            break;

        case 1:
            document.getElementById('disp').innerText = 2;
            break;

        case 2:
            document.getElementById('disp').innerText = 3;
            break;  
            
        case 3:
            document.getElementById('disp').innerText = 4;
            break;

        case 4:
            document.getElementById('disp').innerText = 5;
            break;

        case 5:
            document.getElementById('disp').innerText = 6;
            break;

        case 6:
            document.getElementById('disp').innerText = 7;
            break;

        case 7:
            document.getElementById('disp').innerText = 8;
            break;

        case 8:
            document.getElementById('disp').innerText = 9;
            break;

        case 9:
            document.getElementById('disp').innerText = 0;
            break;

        case 10: 
        document.getElementById('disp').innerText = '';
        break;
        default:
            break;
    }
}

function suma(num1,num2) {
   return(num1 + num2);
}

function igual() {
    return(suma);
}


//user();