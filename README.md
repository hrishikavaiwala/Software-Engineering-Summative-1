# Software Engineering Summative 1 - Temperature Converter Web Application
![WebApp](https://github.com/hrishikavaiwala/Software-Engineering-Summative-1/assets/126560322/9fc94e11-911d-4abf-a221-89b1a98a1b1f)

## Plan
The creation and implementation of a temperature conversion application within my workplace will be a simple and beneficial tool. As part of the pharmaceutical industry, this application will allow scientists in and outside of laboratories to convert three different temperature metrics:
* Celsius
* Fahrenheit
* Kelvin

The Standard International (SI) unit of thermodynamic temperature is Kelvin. It is often preferred by scientists as the Kelvin temperature scale begins at where 0 reflects the complete absence of thermal energy.

### Application Requirements
This application has a number of functional and non-functional requirements that can be tested against to ensure the application meets user needs and performs as expected.
Functional Requirements:
* Temperature Conversions – The application must convert from Celsius, Fahrenheit, and Kelvin to the other two temperature metrics.
* User Input Handling – The application allows users to input any numerical values in any of the three temperature boxes.
* Error Handling – User input must be validated as a valid number and display errors for invalid inputs.
* User Interface – A clear button must be included to reset all fields.
* Real-Time Conversion – The application must perform the conversions and display the results in real-time immediately after user input.

Non-Functional Requirements:
* Performance – The application must load and perform conversions in real time without delay.
* Compatibility – The application must be compatible with major browsers and work on various devices including desktops and smartphones.
* Usability – The application must be simple to use through a clear user interface.
* Reliability – The application must consistently provide accurate temperature conversions.
* Security – All input data must be sanitised to prevent security vulnerabilities.


## Design
![UI Prototypes](https://github.com/hrishikavaiwala/Software-Engineering-Summative-1/assets/126560322/d4bb7be7-bef9-4395-a944-07a4bfd19a47)

These designs were created via Miro as this provides a simple interface with access to shapes, a wireframe library, and a variety of colours that can be leveraged to create a User Interface for my application. I created one base design in three different colours. These colours were checked against WCAG 2.1 which are guidelines for web accessibility. This was sent to a number of potential users for feedback and to see which one they preferred before any coding was begun.
The results showed that the colour scheme users preferred was Prototype2 and feedback was given that they would like the Clear button to be slightly larger. This will be taken into account during application development to ensure user needs are met.

## Project Management
To manage I have loosely followed the System Development Life Cycle (SDLC). The main phases I have taken from this methodology are Plan, Design, Development, Testing, and Maintenance. An Agile SDLC approach will be taken for this application which takes on an iterative approach to project development.
I have implemented this with a Kanban Board and tickets which can be done in a Sprint-like manner. This is where a short time period is allotted for a certain set amount of work to be completed.

### GitHub Project
![kanban](https://github.com/hrishikavaiwala/Software-Engineering-Summative-1/assets/126560322/1e27cbb4-47de-49a5-8fe5-2a47a4e56456)

Through the use of a ticketing system on the Kanban Board, it is simple to see where each section of the project is at through different sections. When items are in the backlog, they are either not priority items for that sprint or are dependent on another ticket being completed. The other sections show when a ticket is ready to begin, is in progress, is being tested, or has been completed.

![labels](https://github.com/hrishikavaiwala/Software-Engineering-Summative-1/assets/126560322/6ccf0cd8-7d72-46d2-8101-833e68946a88)

Alongside the use of these tickets, I implemented labels that link to different steps of the SDLC methodology. The documentation label is used so the README.md document can be updated alongside the progress of the tickets. Alongside this, the bug label can be added to tickets when something isn’t working as expected when in progress or during the testing phase.

## Technical Documentation

### Step 1. Ensure node and npm are installed by running the following commands in your terminal:

```sh
node -v
```
```sh
npm -v
```

If npm in not installed, do the following:

```sh
npm install -g npm
```

### Step 2. Clone this repository:

```sh
git clone https://github.com/hrishikavaiwala/Software-Engineering-Summative-1.git
```

### Step 3. To run the unit tests, run the following command:

```sh
npm test
```

## Development

### Code Logic
Before developing the code, it is important to understand the logic behind it and how you expect the application to work. The aim of the application is to be able to convert between Celsius, Fahrenheit, and Kelvin, and the conversions to be accurate and given in a timely manner.
Depending on which input box the user writes in, the other two boxes should give the conversions in the other two input boxes in real time. There are 4 key scenarios that could occur when the user is interacting with the web application:

1. The user inputs a number in the Celsius box. That input is used in the conversions for Fahrenheit and Kelvin. These conversions are outputted in the Fahrenheit and Kelvin boxes.
2. The user inputs a number in the Fahrenheit box. That input is used in the conversions for Celsius and Kelvin. These conversions are outputted in the Celsius and Kelvin boxes.
3. The user inputs a number in the Kelvin box. That input is used in the conversions for Celsius and Fahrenheit. These conversions are outputted in the Celsius and Fahrenheit boxes.
4. The user presses the clear button. All three input/output boxes should clear.

I also aim to ensure the user can only input numbers in the input boxes to prevent errors.

### Conversion Code
To create the JavaScript, mathematical formulas were implemented for the converter. This was the first step of development and was required to be coded in a simple and accurate way to ensure it would work for all numbers. Throughout the code consistency of decimal points has also been kept to 2 decimal places. This will be continued for displayed answers within the conversion application. Comments have been implemented for each section of the conversions to ensure clarity.
For example, the formula used to convert from Celsius to Fahrenheit is as follows:

```
if (!isNaN(celsius)) {
        document.getElementById('fahrenheit').value = (celsius * 9/5 + 32).toFixed(2);
```

Similarly to convert from Fahrenheit to Kelvin is as follows:

```
if (!isNaN(fahrenheit)) {
        document.getElementById('kelvin').value = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
```

In the two extracts of code above, the “!isNaN” function is used to check if the values of Celsius and Fahrenheit are valid numbers. The “isNaN” function stands for “is Not-a-Number”  The “!” represents the logical operator for NOT which negates the result of “isNaN”. This is so the function only runs if the value in the input boxes is NOT Not-a-Number, meaning it is a number. If the input is not a number the function will not run to prevent errors.


### HTML and CSS
Within the HTML, I created a framework of how I wanted the application to look. This included creating input boxes that linked to the JavaScript and creating a clear button. Creating the button was the most challenging part of this as I struggled to make it clear all the input fields on click. Once I had fixed this issue and tested the web page to ensure all fields cleared on the button click I moved on to the CSS.
My main aim with the CSS was to ensure the application looked simple and clean. As well as this, I wanted to replicate my planned design as much as possible with the addition of a larger clear button. CSS was used for the webpage background, the addition of boxes, and the alignment of the content created in the HTML. After the application of colours that matched the Prototype1 colour scheme, the web application looked like the design and worked as expected.
I faced some issues applying the CSS style to the web application. Here, the importance of accurately referencing the CSS and JavaScript files in the HTML was highlighted to ensure they were applied as expected.

```
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```

![kanban2](https://github.com/hrishikavaiwala/Software-Engineering-Summative-1/assets/126560322/3ca118ae-1d2f-42fe-bc0e-8eb07a644868)

### Files used to run the app
* script.js
* styles.css
* index.html

### Files used in testing
* package.json
* package-lock.json
* functions.js
* smoke.test.js
* unit.test.js 



## Testing

### Testing Against Requirements 
As well as testing the code, testing against the requirements that were set at the beginning of the project is key to ensuring the Web Application works as required. To do this I have created a Test Case to test against each requirement.

|     Test ID      |     Requirement                           |     Test Case                                         |     Test Steps                                                                |     Test Data    |     Expected Result                                      |     Actual Result                                        |     Status      |
|------------------|-------------------------------------------|-------------------------------------------------------|-------------------------------------------------------------------------------|------------------|----------------------------------------------------------|----------------------------------------------------------|-----------------|
|     Test_01      |     Temperature Conversion                |     Convert from Celsius to Fahrenheit                |     Put input in the Celsius Box                                              |     100          |     212.00                                               |     212.00                                               |     Complete    |
|     Test_02      |     Temperature Conversion                |     Convert from Celsius to Kelvin                    |     Put input in the Celsius Box                                              |     100          |     373.15                                               |     373.15                                               |     Complete    |
|     Test_03      |     Temperature Conversion                |     Convert from Fahrenheit to Celsius                |     Put input in the Fahrenheit Box                                           |     100          |     37.78                                                |     37.78                                                |     Complete    |
|     Test_04      |     Temperature Conversion                |     Convert from Fahrenheit to Kelvin                 |     Put input in the Fahrenheit Box                                           |     100          |     310.93                                               |     310.93                                               |     Complete    |
|     Test_05      |     Temperature Conversion                |     Convert from Kelvin to Celsius                    |     Put input in the Kelvin Box                                               |     100          |     -173.15                                              |     -173.15                                              |     Complete    |
|     Test_06      |     Temperature Conversion                |     Convert from Kelvin to Fahrenheit                 |     Put input in the Kelvin Box                                               |     100          |     -279.15                                              |     -279.15                                              |     Complete    |
|     Test_07      |     User Input Handling                   |     Numerical values in input box                     |     Input numerical value in Celsius   Box                                    |     50           |     F=122.00 K=323.15                            |     F=122.00 K=323.15                            |     Complete    |
|     Test_08      |     User Input Handling                   |     Numerical values in input box                     |     Input numerical value in Fahrenheit   Box                                 |     50           |     C=10.00 K=283.15                             |     C=10.00 K=283.15                             |     Complete    |
|     Test_09      |     User Input Handling                   |     Numerical values in input box                     |     Input numerical value in Kelvin   Box                                     |     50           |     C=-223.15 F=-369.67                          |     C=-223.15 F=-369.67                          |     Complete    |
|     Test_10      |     Error Handling                        |     Invalid value in input box                        |     Invalid input in Celsius Box                                              |     abc          |     No input recorded or output                          |     No input recorded or output                          |     Complete    |
|     Test_11      |     Error Handling                        |     Invalid value in input box                        |     Invalid input in Fahrenheit Box                                           |     abc          |     No input recorded or output                          |     No input recorded or output                          |     Complete    |
|     Test_12      |     Error Handling                        |     Invalid value in input box                        |     Invalid input in Kelvin Box                                               |     abc          |     No input recorded or output                          |     No input recorded or output                          |     Complete    |
|     Test_13      |     User Interface                        |     Button Functionality                              |     Press button to clear all fields                                          |     N/A          |     All fields cleared                                   |     All fields cleared                                   |     Complete    |
|     Test_14      |     Real-Time Conversion + Performance    |     Converting temperatures quickly                   |     Input in Celsius box                                                      |     10           |     Converts immediately without   delay                 |     Converts immediately without delay                   |     Complete    |
|     Test_15      |     Compatibility                         |     Site loads on all devices                         |     Load device on laptop, PC and   tablet with Chrome, Explorer, and Edge    |     N/A          |     All browsers and devices load   site correctly.      |     All browsers and devices load   site correctly.      |     Complete    |
|     Test_16      |     Usability                             |     Number of people are able to use   the web app    |     Test web app with a group of people                                       |     N/A          |     Take feedback from individuals                       |     All agreed the web app is clear   and simple.        |     Complete    |
|     Test_17      |     Reliability                           |     Always displays correct answer                    |     Repeat Test_1 to Test_09 to   ensure answers are the same                 |     N/A          |     Answers are the same as in the   test previously.    |     Answers are the same as in the   test previously.    |     Complete    |

### Unit Testing
Throughout the development phase, Test Driven Development (TDD) has been used to reduce bugs and ensure the functions work as expected. For unit testing, I did 10 tests in total through 2 different test scripts.

My first test via script smoke.test.js tested if the webpage itself loaded successfully. A smoke test is used to determine if the software is ready for the testing phase and to test how the process itself would work. For this reason, I only put one test in this script.
To do this I used a GET request and checked the Status Code. The logic behind this test was that if the status code was equal to 200 then this meant the webpage had loaded as expected. Any other status code such as 404 (Not Found response code) would show an error message explaining the error that has been given.

My second test script tests all three functions I created for converting between Celsius, Fahrenheit, and Kelvin. This script is called unit.test.js. For each converting function, I tested three different inputs and checked their outputs against the expected result. I tested a positive number, a negative number, and zero for each function to ensure the logic and calculations worked as expected.

During testing, I came across some issues getting jest to find the test files I had created when using “npm test” in the terminal. Here I found out that the testing files had to follow a specific format to ensure they were picked up by jest. The format for these tests had to be xyz.test.js. This fixed a big issue and allowed me to try out my tests in the terminal and see if my tests failed or passed. After this, I was able to see any errors in my tests or code and fix them to ensure all my tests worked as expected. 

Below you can see all 10 tests passing:
![testing](https://github.com/hrishikavaiwala/Software-Engineering-Summative-1/assets/126560322/658e74a6-775f-4780-b241-927111a43e9a)



## Accessibility
To test the accessibility of my website I tested it on Lighthouse. Lighthouse is an open-source automated testing tool. This tool tests against the following 4 key variables and gives a score out of 100:

* Performance – This refers to how efficiently and quickly the website loads and runs. The metrics involved in determining its scoring. This includes page load time, speed index, and interactive time.

* Accessibility – This test checks to ensure text is readable, all interactive elements are easily accessible, and ARIA (Accessible Rich Internet Application) roles are applied to enhance HTML semantics.

* Best Practices – This metric tests against a range of web development standards to ensure the site runs smoothly. This includes testing security (use of HTTPS), responsiveness, browser compatibility, and more.

* SEO (Search Engine Optimisation) – This refers to optimising the website to rank higher in search engine results. This includes checking URL structure, content quality, mobile friendliness, and site speed.

Below you can see the scores given for these metrics as well as more in-depth performance metrics.
![metrics](https://github.com/user-attachments/assets/ed1b847f-3be4-40a0-b47c-a3285e968e79)

![performance metrics](https://github.com/user-attachments/assets/be76c4e7-5c01-45c8-ad5a-a55f0d933232)


## Evaluation

Overall, the design of the application is simple and intuitive. The minimalistic design helps fast loading times. The simple use of the JavaScript function for conversions also helps maintain a responsive UI that converts in real-time. I have also ensured to use semantic HTML elements such as <button> and <label> which ensures compatibility with assistive technologies.
One thing I would improve on in the future would be having additional features. For example, having a function that clears the other input boxes when inserts a new number in one of the boxes could be beneficial. Although this functionality isn’t necessary it could enhance user experience

[The deployed application is available here:](https://hrishikavaiwala.github.io/Software-Engineering-Summative-1/)

