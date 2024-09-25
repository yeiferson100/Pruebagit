function cambiarColor() {
    document.querySelector('h1').style.color = 'green';
    document.querySelectorAll('h3').forEach(h3 => h3.style.color = 'red');
    document.querySelectorAll('p').forEach(p => p.style.color = 'blue');
}


function validarEnvio() {
const nombre = document.querySelector('td:nth-child(1)').textContent;
if (nombre === 'Fernando') {
    alert('Envio realizado correctamente');
} else {
    alert('Nombre no coincide, por favor verifique.');
}
}

document.querySelectorAll('button')[0].addEventListener('click', validarEnvio);

function toggleExperiencia() {
const experienciaDiv = document.getElementById('experiencia');
if (experienciaDiv.style.display === 'none') {
    experienciaDiv.style.display = 'block';
} else {
    experienciaDiv.style.display = 'none';
}
}

function mostrarAlerta() {
alert('Envio realizado correctamente');
}
