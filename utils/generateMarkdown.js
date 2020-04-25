function generateMarkdown(data) {
    return `
  ## Title ${data.title} 
  ## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License
${data.license}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

If you have any questions contact [${data.username}](${data.url}) at ${data.email}.

![GitHub Profile](https://github.com/${data.username}.png) 
  `;
 }
  
  module.exports = generateMarkdown;
  