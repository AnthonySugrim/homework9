const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
 
// Badge, Title, Description, Table Of Content, Installation, Usage, Lincense, Contributing, Tests, Questions > Github profile picture & email

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
  {
    type: "input",
    name: "url",
    message: "What is URL to your project?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's title?"
  },
  {
    type: "input",
    name: "description",
    message: "Short description of your project"
  },
  {
    type: "input",
    name: "license",
    message: "What kind of license does your project have?",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install OS X | Linus | Windows",
  },
  {
    type: "input",
    name: "test",
    message: "How do you test this application?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the usage of this application?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can users contribute to the application?",
  }
];

function writeToFile(fileName, data) 
{
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  })
}

init();
