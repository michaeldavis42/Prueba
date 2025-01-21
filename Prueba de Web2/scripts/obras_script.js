document.addEventListener('DOMContentLoaded', function() {
    let obras = [];
    const btnAgregarObra = document.getElementById('btnAgregarObra');
    const btnCancelar = document.getElementById('btnCancelar');
    const formularioObra = document.getElementById('formularioObra');
    const formObra = document.getElementById('formObra');
    const listaObras = document.getElementById('listaObras');
    const mensajeVacio = document.getElementById('mensajeVacio');

    btnAgregarObra.addEventListener('click', () => {
        formularioObra.style.display = 'block';
        mensajeVacio.style.display = 'none';
    });

    btnCancelar.addEventListener('click', () => {
        formularioObra.style.display = 'none';
        formObra.reset();
        actualizarVistaObras();
    });

    formObra.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(formObra);
        const nuevaObra = {
            id: Date.now(),
            nombre: formData.get('nombre'),
            ubicacion: formData.get('ubicacion'),
            descripcion: formData.get('descripcion'),
            fechaInicio: formData.get('fechaInicio')
        };

        obras.push(nuevaObra);
        formObra.reset();
        formularioObra.style.display = 'none';
        actualizarVistaObras();
    });

    function actualizarVistaObras() {
        if (obras.length === 0) {
            mensajeVacio.style.display = 'block';
            listaObras.innerHTML = '';
            return;
        }

        mensajeVacio.style.display = 'none';
        listaObras.innerHTML = obras.map(obra => `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card obra-card shadow-sm">
                    <div class="card-body">
                        <h3 class="card-title h5">${obra.nombre}</h3>
                        <p class="card-text mb-2"><strong>Ubicación:</strong> ${obra.ubicacion}</p>
                        <p class="card-text mb-2"><strong>Fecha de Inicio:</strong> ${obra.fechaInicio}</p>
                        <p class="card-text mb-4">${obra.descripcion}</p>
                        <button class="btn btn-success w-100">Ver Obra</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
});