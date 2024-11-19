const Somar = () => {
    const valor1 = document.getElementById('Valor1').value;
    const valor2 = document.getElementById('Valor2').value;

    alert(`A soma é: ${parseFloat(valor1) + parseFloat(valor2)}`);
}
const Subtrair = () => {
    const valor1 = document.getElementById('Valor1').value;
    const valor2 = document.getElementById('Valor2').value;
        
    alert(`A subtração é: ${parseFloat(valor1) - parseFloat(valor2)}`);
}
const Multiplicar = () => {
    const valor1 = document.getElementById('Valor1').value;
    const valor2 = document.getElementById('Valor2').value;
    
    alert(`A multiplicação é: ${parseFloat(valor1) * parseFloat(valor2)}`);
}