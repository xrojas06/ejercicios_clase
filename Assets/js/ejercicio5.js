document.body.onload = function() {
    closeModal();
}

function openModal(shape, isArea = false) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalForm = document.getElementById("modalForm");

    modal.style.display = "block";

    // Configurar el título del modal
    switch (shape){
        case "circle":
            modalTitle.textContent = `${isArea ? 'Área' : 'Perímetro'} del círculo`;
            break
        case "square":
            modalTitle.textContent = `${isArea ? 'Área' : 'Perímetro'} del cuadrado`;
            break
        case "rectangle":
            modalTitle.textContent = `${isArea ? 'Área' : 'Perímetro'} del rectángulo`;
            break
        case "triangle":
            modalTitle.textContent = `${isArea ? 'Área' : 'Perímetro'} del triángulo`;
            break

    }

    // Limpiar el formulario antes de agregar nuevos campos
    modalForm.innerHTML = "";

    // Agregar campos de entrada según la figura geométrica
    switch (shape) {
        case "circle":
            modalForm.innerHTML += '<label for="radius">Radio:</label>';
            modalForm.innerHTML += '<input type="number" id="radius" required>';
            break;
        case "triangle":
            modalForm.innerHTML += '<label for="side1">Lado 1:</label>';
            modalForm.innerHTML += '<input type="number" id="side1" required>';
            modalForm.innerHTML += '<label for="side2">Lado 2:</label>';
            modalForm.innerHTML += '<input type="number" id="side2" required>';
            modalForm.innerHTML += '<label for="side3">Lado 3:</label>';
            modalForm.innerHTML += '<input type="number" id="side3" required>';
            break;
        case "rectangle":
            modalForm.innerHTML += '<label for="base">Base:</label>';
            modalForm.innerHTML += '<input type="number" id="base" required>';
            modalForm.innerHTML += '<label for="height">Altura:</label>';
            modalForm.innerHTML += '<input type="number" id="height" required>';
            break;
        case "square":
            modalForm.innerHTML += '<label for="side">Lado:</label>';
            modalForm.innerHTML += '<input type="number" id="side" required>';
            break;
    }

    modalForm.innerHTML += '<button type="button" onclick="calculate(\'' + shape + '\', ' + isArea + ')">Calcular</button>';
}

function calculate(shape, isArea) {
    let result;
    switch (shape) {
        case "circle":
            const radius = parseFloat(document.getElementById("radius").value);
            result = isArea ? Math.PI * Math.pow(radius, 2) : 2 * Math.PI * radius;
            break;
        case "triangle":
            const side1 = parseFloat(document.getElementById("side1").value);
            const side2 = parseFloat(document.getElementById("side2").value);
            const side3 = parseFloat(document.getElementById("side3").value);
            const perimeterTriangle = side1 + side2 + side3;
            const s = perimeterTriangle / 2;
            result = isArea ? Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)) : perimeterTriangle;
            break;
        case "rectangle":
            const base = parseFloat(document.getElementById("base").value);
            const height = parseFloat(document.getElementById("height").value);
            result = isArea ? base * height : 2 * (base + height);
            break;
        case "square":
            const side = parseFloat(document.getElementById("side").value);
            result = isArea ? Math.pow(side, 2) : 4 * side;
            break;
    }

    switch (shape){
        case "circle":
            alert(`El ${isArea ? 'Área' : 'Perímetro'} del círculo es: ${result}`);
            break;
        case "triangle":
            alert(`El ${isArea ? 'Área' : 'Perímetro'} del triángulo es: ${result}`);
            break;
        case "rectangle":
            alert(`El ${isArea ? 'Área' : 'Perímetro'} del rectángulo es: ${result}`);
            break;
        case "square":
            alert(`El ${isArea ? 'Área' : 'Perímetro'} del cuadrado es: ${result}`);
            break;

    }




}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

