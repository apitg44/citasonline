const departamentos = [
    "",
    "Amazonas",
    "Antioquia",
    "Arauca",
    "Atlántico",
    "Bolívar",
    "Boyacá",
    "Caldas",
    "Caquetá",
    "Casanare",
    "Cauca",
    "Cesar",
    "Chocó",
    "Córdoba",
    "Cundinamarca",
    "Guainía",
    "Guaviare",
    "Huila",
    "La Guajira",
    "Magdalena",
    "Meta",
    "Nariño",
    "Norte de Santander",
    "Putumayo",
    "Quindío",
    "Risaralda",
    "San Andrés y Providencia",
    "Santander",
    "Sucre",
    "Tolima",
    "Valle del Cauca",
    "Vaupés",
    "Vichada"
];

const selectDepartamentos = document.getElementById("departamentos");
const buttonContinue = document.getElementById("continue");

departamentos.forEach((departamento) => {
    const option = document.createElement("option");
    option.value = departamento.toUpperCase();
    option.text = departamento.toUpperCase();
    selectDepartamentos.appendChild(option);
});

buttonContinue.addEventListener("click", () => {
    if (selectDepartamentos?.value?.toUpperCase() !== "") {
        const departamentoSeleccionado = selectDepartamentos?.value?.toUpperCase();
        const rutaPasaporte = `pasaporte.html?departamento=${encodeURIComponent(departamentoSeleccionado)}`;
        window.location.href = rutaPasaporte;
    }
});