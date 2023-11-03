function operacion(a, b, operador) {
    switch (operador) {
        case 1:
            return a + b; // Suma
        case 2:
            return a - b; // Resta
        case 3:
            return a * b; // Multiplicación
        case 4:
            if (b === 0) {
                return "No se puede dividir por cero";
            }
            return a % b; // Módulo
        default:
            return "Operador no válido";
    }
}

// Ejemplos de uso
console.log("Suma: " + operacion(5, 3, 1)); // 8
console.log("Resta: " + operacion(5, 3, 2)); // 2
console.log("Multiplicación: " + operacion(5, 3, 3)); // 15
console.log("Módulo: " + operacion(5, 3, 4)); // 2
console.log("Operación inválida: " + operacion(5, 3, 5)); // Operador no válido
