/* 
const desparecer = () => {
    let icono = document.getElementById("arroba");
    icono.style.display = "none"
}

const desaparecer2 = () => {
    let icono2 = document.getElementById("candado");
    icono2.style.display = "none"
} */

const redireccion = () => {
    Swal.fire({
        title: 'Correcto',
        icon: 'success',
        html: '<a href="https://luisgabriel112.github.io/Curso_Dev/dashboard/dashboard.html">Igresa a tu panel de control</a>',
        timer: 10000,
        showConfirmButton: false,
        background: '#fdfacf',
        iconColor: '#0c1117',
        timerProgressBar: true
    })
}

