// Function to convert from Celsius to Fahrenheit and Kelvin to two decimal places
function convertFromCelsius() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        document.getElementById('fahrenheit').value = (celsius * 9/5 + 32).toFixed(2);
        document.getElementById('kelvin').value = (celsius + 273.15).toFixed(2);
    }
}

// Function to convert from Fahrenheit to Celsius and Kelvin to two decimal places
function convertFromFahrenheit() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        document.getElementById('celsius').value = ((fahrenheit - 32) * 5/9).toFixed(2);
        document.getElementById('kelvin').value = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
    }
}

// Function to convert from Kelvin to Celsius and Fahrenheit to two decimal places
function convertFromKelvin() {
    const kelvin = parseFloat(document.getElementById('kelvin').value);
    if (!isNaN(kelvin)) {
        document.getElementById('celsius').value = (kelvin - 273.15).toFixed(2);
        document.getElementById('fahrenheit').value = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
    }
}

// Function to clear all input fields
function clearForm() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('kelvin').value = '';
}

// Exporting all functions from this script for Unit Testing
module.exports = { convertFromCelsius, convertFromFahrenheit, convertFromKelvin, clearForm };