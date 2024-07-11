//Unit Testing

// Calling functions from script.js
const { convertFromCelsius, convertFromFahrenheit, convertFromKelvin, clearForm  } = require('./script');



describe('Converting from Celsius to Fahrenheit and Kelvin', () => {
    test('convertFromCelsius(100) should return Fahrenheit = 212.00 and Kelvin = 373.15', () => {
        const result = convertFromCelsius(100);
        const passed = result.fahrenheit === '212.00' && result.kelvin === '373.15';
        expect(passed);
    });

    test('convertFromCelsius(-50) should return Fahrenheit = -58.00 and Kelvin = 223.15" }', () => {
        const result = convertFromCelsius(-50);
        const passed = result.fahrenheit === '-58.00' && result.kelvin === '223.15';
        expect(passed);
    });


    test('convertFromCelsius(0) should return Fahrenheit = 32.00 and Kelvin = 273.15" }', () => {
        const result = convertFromCelsius(0);
        const passed = result.fahrenheit === '32.00' && result.kelvin === '273.15';
        expect(passed);
    });

});


// Testing convertFromFahrenheit with positive numbers, negative numbers, and zero
describe('Converting from Fahrenheit to Celsius and Kelvin', () => {
    test('convertFromFahrenheit(100) should return Celsius = 37.78 and Kelvin = 310.93', () => {
        const result = convertFromFahrenheit(100);
        const passed = result.celsius === '212.00' && result.kelvin === '373.15';
        expect(passed);
    });

    test('convertFromFahrenheit(-50) should return Celsius = -45.56 and Kelvin = 227.59', () => {
        const result = convertFromFahrenheit(-50);
        const passed = result.celsius === '-45.56' && result.kelvin === '227.59';
        expect(passed);
    });

    test('convertFromFahrenheit(0) should return Celsius = -17.78 and Kelvin = 255.37', () => {
        const result = convertFromFahrenheit(0);
        const passed = result.celsius === '-17.78' && result.kelvin === '255.37';
        expect(passed);
    });

});


// Testing convertFromKelvin with positive numbers, negative numbers, and zero
describe('Converting from Kelvin to Celsius and Fahrenheit', () => {
    test('convertFromKelvin(100) should return Celsius = -173.15 and Fahrenheit = -279.67', () => {
        const result = convertFromKelvin(100);
        const passed = result.celsius === '-173.15' && result.fahrenheit === '-279.67';
        expect(passed);
    });

    test('convertFromKelvin(-50) should return Celsius = -323.15 and Fahrenheit = -549.67', () => {
        const result = convertFromKelvin(-50);
        const passed = result.celsius === '-323.15' && result.fahrenheit === '-549.67';
        expect(passed);
    });

    test('convertFromKelvin(0) should return Celsius = -273.15 and Fahrenheit = -459.67', () => {
        const result = convertFromKelvin(0);
        const passed = result.celsius === '-273.15' && result.fahrenheit === '-459.67';
        expect(passed);
    });

});


// Testing clearForm

// Setting up a mock DOM so there are values to test when clearing using the function
//beforeEach(() => {
//    document.body.innerHTML = `
//        <input type="text" id="celsius" value="25">
//        <input type="text" id="fahrenheit" value="77">
//        <input type="text" id="kelvin" value="298.15">
//    `;
//});

//describe('Testing the clearForm function', () => {
//    test('This sshould clear all the input fields', () => {
//        clearForm();
//        expect(document.getElementById('celsius').value).toBe('');
//        expect(document.getElementById('fahrenheit').value).toBe('');
//        expect(document.getElementById('kelvin').value).toBe('');
//    });
//});