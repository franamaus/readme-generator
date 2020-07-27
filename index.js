const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// array of questions for user
const promptQuestions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description for your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                   return true;
                } else {
                    console.log('A description of the project is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instalation',
            message: 'What are the steps required to install your project? (Required)',
            validate: instalationInput => {
                if (instalationInput) {
                    return true;
                } else {
                    console.log('A description of the project is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('A usage desctiption is required.');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Name a collaborator, assest and/or source in relation to this project. (Required)',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('A usage desctiption is required.');
                    return false;
                }
            } 
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose your license. (Check one that applies)',
            choices: ['MIT', 'ISC', 'Apache License 2.0', 'Boost Software License 1.0', 'GNU GPLv2 ', 'GNU GPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0']
        },
    ]);
}
promptQuestions()

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
