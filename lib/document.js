const Shape = require('./shapes.js');
const Color = require('./color.js');
const LogoText = require('./logoText.js');

function createDocument(title, tasks = []) {
  const shape = new Shape().render();
  const color = new Color().render();
  const logoText = new LogoText().render();

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SVG Logo Generator</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
            <${shape}/>
            <${color}/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${logoText}</text>
         </svg>
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };