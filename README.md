# Software Engineering Summative 1 - Temperature Converter Web Application
![WebApp](https://github.com/hrishikavaiwala/Software-Engineering-Summative-1/assets/126560322/9fc94e11-911d-4abf-a221-89b1a98a1b1f)

## Plan
The creation and implementation of a temperature conversion application within my workplace will be a simple and beneficial tool. As part of the pharmaceutical industry, this application will allow scientists in and outside of laboratories to convert in three different temperature metrics:
* Celsius
* Fahrenheit
* Kelvin

The Standard International (SI) unit of thermodynamic temperature is Kelvin and is often preferred by scientists as the Kelvin temperature scale begins at where 0 reflects the complete absence of thermal energy.

### Application Requirements
This application has a number of functional and non-functional requirements that can be tested against to ensure the application meets user needs and performs as expected.
Functional Requirements:
* Temperature Conversions – The application must convert from Celsius, Fahrenheit and Kelvin to the other two temperature metrics.
* User Input Handling – The application allows the user to input any numerical values in any of the three temperature boxes.
* Error Handling – User input must be validated as a valid number and display errors for invalid inputs.
* User Interface – A clear button must be included to reset all fields.
* Real-Time Conversion – The application must perform the conversions and display the results in real-time immediately after user input.

Non-Functional Requirements:
* Performance – The application must load and perform conversions in real-time without major delay.
* Reliability – The application must be compatible with major browsers and work on various devices including desktops and smartphones.
* Usability – The application must be simple to use through a clear user interface.
* Reliability – The application must consistently provide accurate temperature conversions.
* Security – All input data must be sanitised to prevent security vulnerabilities.


## Design
![UI Prototypes](https://github.com/hrishikavaiwala/Software-Engineering-Summative-1/assets/126560322/d4bb7be7-bef9-4395-a944-07a4bfd19a47)

These designs was created via Miro as this provides a simple interface with access to shapes, a wireframe library and a variety of colours that can be leveraged to create a User Interface for my application. I created one base design in three different colours. These colours were checked against WCAG 2.1 which are guidelines for web accessibility. This was sent to a number of potential users for feedback and see which one they preferred before any coding is begun.
The results showed that the colour scheme users preferred was Prototype1 and feedback was giving that they would like the Clear button to be slightly larger. This will be taken into account during application development to ensure user needs are met.

## Project Management
To manage I have loosely followed the System Development Life Cycle (SDLC). The main phases I have taken from this methodology are: Plan, Design, Development, Testing, Maintenance. An Agile SDLC approach will be taken for this application which takes on an iterative approach to project development.
I have implemented this with a Kanban Board and tickets which can be done in a Sprint-like manner. This is where a short time period is allotted for a certain set amount of work to be completed.

### GitHub Project
![kanban](https://github.com/hrishikavaiwala/Software-Engineering-Summative-1/assets/126560322/1e27cbb4-47de-49a5-8fe5-2a47a4e56456)

Through the use of a ticketing system on the Kanban Board it is simple to see where each section of the project is at through different sections. When items are in backlog, they are either not priority items for that sprint, or are dependent on another ticket being completed. The other sections show when a ticket is ready to begin, is in progress, being tested or completed.

![labels](https://github.com/hrishikavaiwala/Software-Engineering-Summative-1/assets/126560322/6ccf0cd8-7d72-46d2-8101-833e68946a88)

Alongside the use of these tickets, I implemented labels that link to different steps of the SDLC methodology. The documentation label is used so the README.md document can be updated alongside progress with the tickets. Alongside this, the bug label can be added to tickets when something isn’t working as expected when in progress or during the testing phase.

## Development


###Code Logic
Before developing the code, it is important to understand the logic behind it and how you expect the application to work. The aim of the application is to be able to convert between Celsius, Fahrenheit and Kelvin and the conversions to be accurate and given in a timely manner.
Depending on which input box the user writes in, the other two boxes should give the conversions in the other two input boxes in real-time. There are 4 key scenarios that could occur when the user is interacting with the web application:

1. User inputs number in Celsius box. That input is used in the conversions for Fahrenheit and Kelvin. These conversions are outputted in the Fahrenheit and Kelvin boxes.
2. User inputs number in Fahrenheit box. That input is used in the conversions for Celsius and Kelvin. These conversions are outputted in the Celsius and Kelvin boxes.
3. User inputs number in Kelvin box. That input is used in the conversions for Celsius and Fahrenheit. These conversions are outputted in the Celsius and Fahrenheit boxes.
4. User pressed clear button. All three input/output boxes should clear.


###Conversion Code
To create the JavaScript, mathematical formulas were implemented for the converter. This was the first step of development and was required to be coded in a simple and accurate way to ensure it would work for all numbers. Throughout the code consistency of decimal points has also been kept to 2 decimal places. This will be continued for displayed answers within the conversion application also. Comments have been implemented for each section of the conversions to ensure clarity.
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

### HTML and CSS
Within the HTML, I created a framework of how I wanted the application to look like. This included creating input boxes that linked to the JavaScript and creating a clear button. Creating the button was the most challenging part of this as I struggled to make it clear all the input fields on click. Once I had fixed this issue and tested the web page to ensure all fields clearer on the button click I moved onto CSS.
My main aim with the CSS was to ensure the application looked simple and clean. As well as this, I wanted to replicate my planned design as much as possible with the addition of a larger clear button. CSS was used for the webpage background, the addition of boxes and alignment of the content created in the HTML. After the application of colours that matched the Prototype1 colour scheme, the web application looked like the design and worked as expected.
I faced some issues applying the CSS style to the web application. Here, the importance of accurately referencing the CSS and JavaScript files in the HTML was highlighted to ensure they are applied as expected.

```
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```




## Testing

### Testing Against Requirements 

### UI Testing

## Accessibility

## Evaluation
