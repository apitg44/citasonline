const imgLogo = document.querySelector('#bloqueImg2071');
const tipoPasaporte = document.querySelector('#pasaporteSelect');
const buttonPay = document.querySelector('#buttonPay');

// Objeto para almacenar los precios por departamento
const precios = {
  "AMAZONAS": 237206,
  "ANTIOQUIA": 294000,
  "ARAUCA": 257000,
  "ATLÁNTICO": 250068,
  "BOLÍVAR": 234470,
  "BOYACÁ": 228000,
  "CALDAS": 310500,
  "CAQUETÁ": 226000,
  "CASANARE": 235799,
  "CAUCA": 276000,
  "CESAR": 297000,
  "CHOCÓ": 286551,
  "CÓRDOBA": 261000,
  "HUILA": 253200,
  "LA GUAJIRA": 258247,
  "MAGDALENA": 207000,
  "META": 260800,
  "NARIÑO": 297900,
  "NORTE DE SANTANDER": 358350,
  "PUTUMAYO": 315000,
  "QUINDÍO": 344800,
  "RISARALDA": 232000,
  "SAN ANDRÉS": 232000, // se asume igual a San Andrés con tarjeta OCRE
  "SANTANDER": 295598,
  "SUCRE": 305300,
  "TOLIMA": 234542,
  "VALLE DEL CAUCA": 333000,
  "VICHADA": 257200,
  "DEFAULT": 186000 // precio en Bogotá según Cancillería
};


window.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const departamento = urlParams.get("departamento");
    changeImage(departamento);
    changeOptions(departamento);
});

const changeImage = (departamento) => {
    imgLogo.src = `img/${departamento}.png`;
    imgLogo.alt = `Gobernación de ${departamento}`;
}

const changeOptions = (departamento) => {
    // Obtener el precio correspondiente al departamento
    const precio = precios[departamento] || precios["DEFAULT"];
    
    // Formatear el precio para mostrar
    const precioFormateado = precio.toLocaleString('es-CO');
    
    if (departamento === "ANTIOQUIA") {
        const optionOne = document.createElement("option");
        optionOne.value = `Pasaporte Ordinario (${precioFormateado})`;
        optionOne.textContent = `Pasaporte Ordinario ($${precioFormateado})`;
        optionOne.dataset.precio = precio;
        tipoPasaporte.appendChild(optionOne);

        const optionTwo = document.createElement("option");
        optionTwo.value = `Pasaporte Ejecutivo (${precioFormateado})`;
        optionTwo.textContent = `Pasaporte Ejecutivo ($${precioFormateado})`;
        optionTwo.dataset.precio = precio;
        tipoPasaporte.appendChild(optionTwo);
    } else if (departamento === "VALLE DEL CAUCA") {
        const optionOne = document.createElement("option");
        optionOne.value = `Pasaporte Ordinario (${precioFormateado})`;
        optionOne.textContent = `Pasaporte Ordinario ($${precioFormateado})`;
        optionOne.dataset.precio = precio;
        tipoPasaporte.appendChild(optionOne);

        const optionTwo = document.createElement("option");
        optionTwo.value = `Pasaporte Ejecutivo (${precioFormateado})`;
        optionTwo.textContent = `Pasaporte Ejecutivo ($${precioFormateado})`;
        optionTwo.dataset.precio = precio;
        tipoPasaporte.appendChild(optionTwo);
    } else if (departamento === "RISARALDA") {
        const optionOne = document.createElement("option");
        optionOne.value = `Pasaporte Ordinario (${precioFormateado})`;
        optionOne.textContent = `Pasaporte Ordinario ($${precioFormateado})`;
        optionOne.dataset.precio = precio;
        tipoPasaporte.appendChild(optionOne);

        const optionTwo = document.createElement("option");
        optionTwo.value = `Pasaporte Ejecutivo (${precioFormateado})`;
        optionTwo.textContent = `Pasaporte Ejecutivo ($${precioFormateado})`;
        optionTwo.dataset.precio = precio;
        tipoPasaporte.appendChild(optionTwo);
    } else {
        const optionOne = document.createElement("option");
        optionOne.value = `Pasaporte Ordinario (${precioFormateado})`;
        optionOne.textContent = `Pasaporte Ordinario ($${precioFormateado})`;
        optionOne.dataset.precio = precio;
        tipoPasaporte.appendChild(optionOne);

        const optionTwo = document.createElement("option");
        optionTwo.value = `Pasaporte Ejecutivo (${precioFormateado})`;
        optionTwo.textContent = `Pasaporte Ejecutivo ($${precioFormateado})`;
        optionTwo.dataset.precio = precio;
        tipoPasaporte.appendChild(optionTwo);
    }
};

buttonPay.addEventListener("click", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const departamento = urlParams.get("departamento");
    
    // Obtener el tipo de pasaporte seleccionado
    const tipoPasaporteSeleccionado = tipoPasaporte.options[tipoPasaporte.selectedIndex].value;
    
    // Obtener el precio del pasaporte seleccionado
    const precio = tipoPasaporte.options[tipoPasaporte.selectedIndex].dataset.precio || 
                  (precios[departamento] || precios["DEFAULT"]);
    
    // Guardar información en el localStorage
    localStorage.setItem('departamento', departamento);
    localStorage.setItem('tipoPasaporte', tipoPasaporteSeleccionado);
    localStorage.setItem('precio', precio);
    
    // Redireccionar a la página de confirmación con los datos
    window.location.href = `confirmacion.html?departamento=${encodeURIComponent(departamento)}&tipo=${encodeURIComponent(tipoPasaporteSeleccionado)}&precio=${precio}`;
});