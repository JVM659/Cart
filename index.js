const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');

// Evento para abrir la carta al pasar el mouse sobre el corazón
heart.addEventListener('mouseenter', () => {
    envelope.classList.add('flap');
});

// Evento para cerrar la carta al alejar el mouse del corazón
heart.addEventListener('mouseleave', () => {
    envelope.classList.remove('flap');
});

// Opcional: Para manejar la interacción en dispositivos táctiles
heart.addEventListener('touchstart', () => {
    envelope.classList.add('flap');
});

heart.addEventListener('touchend', () => {
    envelope.classList.remove('flap');
});
