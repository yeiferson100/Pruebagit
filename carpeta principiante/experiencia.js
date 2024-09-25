// experiencia.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevenir el envío del formulario hasta que se validen los campos
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validar que los campos no estén vacíos
    if (nombre === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    if (email === '') {
        alert('Por favor, ingresa tu email.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }

    if (mensaje === '') {
        alert('Por favor, ingresa un mensaje.');
        return;
    }

    // Si todo está bien, puedes enviar el formulario
    alert('¡Formulario enviado con éxito!');
    document.getElementById('contactForm').submit();
});

// Función para validar el formato del email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}