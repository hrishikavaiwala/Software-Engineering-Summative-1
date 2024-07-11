// All functions for my application will be exported from here to script.js

// Function to convert from Celsius to Fahrenheit and Kelvin to two decimal places
function convertFromCelsius(celsius) {
    return {
        fahrenheit: ((celsius * 9/5) + 32).toFixed(2),
        kelvin: (celsius + 273.15).toFixed(2)
    };
}

// Function to convert from Fahrenheit to Celsius and Kelvin to two decimal places
function convertFromFahrenheit(fahrenheit) {
    return {
        celsius: ((fahrenheit - 32) * 5/9).toFixed(2),
        kelvin: (((fahrenheit - 32) * 5/9) + 273.15).toFixed(2)
    };
}

// Function to convert from Kelvin to Celsius and Fahrenheit to two decimal places
function convertFromKelvin(kelvin) {
    return {
        celsius: (kelvin - 273.15).toFixed(2),
        fahrenheit: (((kelvin - 273.15) * 9/5) + 32).toFixed(2)
    };
}

// Exporting all functions from this script for Unit Testing
module.exports = { convertFromCelsius, convertFromFahrenheit, convertFromKelvin};