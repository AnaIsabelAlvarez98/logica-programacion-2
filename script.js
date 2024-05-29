function convertTemperature() {
    let celsius = document.getElementById('celsius').value;
    let celsiusNumber = parseFloat(celsius);
    let fahrenheit = (celsiusNumber * 9 / 5) + 32;
    let kelvin = celsiusNumber + 273.15;

    if (isNaN(celsius)) {
        document.getElementById("result").innerHTML = "Por favor ingresa un número válido"

    } else {
        document.getElementById("result").innerHTML = `El resultado de la conversión es: <br> Grados Fahrenheit: ${fahrenheit}° <br>Grados Kelvin: ${kelvin}°`;
    }
}
