// Smoke test
const http = require('http');

describe('Smoke Test for Temperature Converter', () => {
    test('Should load homepage successfully', (done) => {
        // GET request to site
        http.get('https://hrishikavaiwala.github.io/Software-Engineering-Summative-1/', (response) => {
            // Checking if HTTP code is 200 (this means request has succeeded)
            expect(response.statusCode).toBe(200);
            done();
            //e is a callback function to provide error message if failure occurs
        }).on('error', (e) => {
            done(e);
        });
    });
});
