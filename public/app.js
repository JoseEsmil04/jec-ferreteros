const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const telefono = document.querySelector('#telefono').value;
    const email = document.querySelector('#email').value;
    const fecha = document.querySelector('#fecha').value;
    const mensaje = document.querySelector('#mensaje').value;

    const alerta = document.createElement('DIV');
    alerta.textContent = 'Todos los datos son obligatorios';
    alerta.classList.add('alerta', 'bg-rojo', 'font-bold', 'font-sans', 
                        'text-lg', 'mt-4', 'text-white','text-center', 'p-4', 'rounded-md');

    const exito = document.createElement('DIV');
    exito.textContent = 'Datos Enviados!, Gracias';
    exito.classList.add('exito', 'bg-verdoso', 'font-bold', 'font-sans', 
                        'text-lg', 'mt-4', 'text-white','text-center', 'p-4', 'rounded-md');

    const alertaExiste = document.querySelector('.alerta')
    alertaExiste?.remove();

    if(nombre === '' || telefono === '' || email === '' || fecha === '' || mensaje === ''){
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove()
        }, 1000);

        return
    }
    formulario.appendChild(exito);

    setTimeout(() => {
        exito.remove()
    }, 1000);
})