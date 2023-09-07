const inquirer = require('inquirer')
const {Triangle, Square, Circle, SVG} = require('./lib/shapes')
const fs = require('fs')

inquirer
.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Please select the shape of your logo.',
        choices: ['Triangle', 'Square', 'Circle']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the color of your logo.',
      },
      {
        type: 'input',
        name: 'text',
        message: 'Please enter the text of your logo.',
        validate: (text) => {return text.length <= 3 || 'Text must not be longer than 3 characters.'}
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Please input the color of your text.',
      }
])
.then((answers) => {
    console.log(answers)
    let shape = null
    switch (answers.shape) {
        case 'Triangle':
            shape = new Triangle();
            break; 
        case 'Square':
            shape = new Square();
            break;
        case 'Circle':
            shape = new Circle();
            break;
    }
    let svg = new SVG();
    shape.setColor(answers.shapeColor);
    svg.setShape(shape.render());
    svg.setText(answers.text);
    svg.setTextColor(answers.textColor);

    fs.writeFile('./examples/logo.svg', svg.render(), (err, data) => {
        err ? console.log(err) : console.log('SVG successfully created!')
    })
})