function sumaImpares() {
    let suma = 0;
    for (let i = 1; i <= 100; i += 2) {
        suma += i;
    }
    document.getElementById('resultado-suma-impares').textContent = `La suma de todos los números impares del 1 al 100 es: ${suma}`;
    document.getElementById('resultado-suma-impares').classList.remove('hidden');
}

function imprimirAsteriscos() {
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);
    let resultado = '';

    if (isNaN(cantidad) || cantidad <= 0) {
        resultado = 'Por favor, ingresa un número válido mayor que 0.';
    } else {
        for (let i = 0; i < cantidad; i++) {
            resultado += '*';
        }
    }

    document.getElementById('resultado-asteriscos').textContent = resultado;
    document.getElementById('resultado-asteriscos').classList.remove('hidden');
}

function mostrarTablas() {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `Tabla del ${i}\n`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`;
        }
        resultado += '\n';  // Espacio entre las tablas
    }
    document.getElementById('resultado-tablas').textContent = resultado;
    document.getElementById('resultado-tablas').classList.remove('hidden');
}
