function crearMatrices() {
    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);
    let matricesInput = '';
    for (let i = 0; i < 2; i++) {
        if(!isNaN(filas) && !isNaN(columnas)){
            matricesInput += `<h3>Matriz ${i + 1}</h3>`;
            for (let j = 0; j < filas; j++) {
                for (let k = 0; k < columnas; k++) {
                    matricesInput += `<input type="number" id="matriz${i}_${j}_${k}"> `;
                }
                matricesInput += '<br>';
            }
        }else {
            alert('Ingrese los valores correspondientes para realizar la suma')
            return
        }
        
    }
    document.getElementById('filas').addEventListener('click', () =>{
        document.getElementById('filas').value = ''
        document.getElementById('columnas').value = ''
        document.getElementById('resultado').innerHTML = ''
        document.getElementById('matricesInput').innerHTML = ''
    })

    document.getElementById('matricesInput').innerHTML = matricesInput;
}

function enviarMatrices() {
    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);

    let matriz1 = [];
    let matriz2 = [];

    for (let i = 0; i < filas; i++) {
        matriz1[i] = [];
        matriz2[i] = [];
        for (let j = 0; j < columnas; j++) {
            const valor1 = parseFloat(document.getElementById(`matriz0_${i}_${j}`).value);
            const valor2 = parseFloat(document.getElementById(`matriz1_${i}_${j}`).value);

            if (!isNaN(valor1) && !isNaN(valor2)) {
                matriz1[i][j] = valor1;
                matriz2[i][j] = valor2;
            } else {
                alert('Por favor, ingrese valores numéricos en todas las cajas de texto.');
                return;
            }
        }
    }

    const resultado = sumarMatrices(matriz1, matriz2);
    mostrarResultado(resultado);
}

function sumarMatrices(matriz1, matriz2) {
    const filas = matriz1.length;
    const columnas = matriz1[0].length;

    let resultado = [];
    for (let i = 0; i < filas; i++) {
        resultado[i] = [];
        for (let j = 0; j < columnas; j++) {
            resultado[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }

    return resultado;
}

function mostrarResultado(resultado) {
    let resultadoHTML = '<h3>Matriz Resultante</h3><table> <br>';
    resultado.forEach(fila => {
        resultadoHTML += '<tr>';
        fila.forEach(valor => {
            resultadoHTML += `<td>${valor}</td>`;
        });
        resultadoHTML += '</tr>';
    });
    resultadoHTML += '</table>';

    document.getElementById('resultado').innerHTML = resultadoHTML;
}
