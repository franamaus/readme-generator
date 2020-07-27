const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

// array of questions for user
const questions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description for your project.',
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
            message: 'What are the steps required to install your project?',
            validate: instalationInput => {
                if (instalationInput) {
                    return true;
                } else {
                    console.log('An installation guide is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
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
            message: "Name a collaborator, asset and/or source you've used in this project.",
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please name at least one contributing source.');
                    return false;
                }
            } 
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose your license. (Choose one that applies)',
            choices: ['MIT', 'ISC', 'Apache 2.0', 'Boost 1.0', 'GNU GPLv2', 'GNU GPLv3', 'GNU AGPLv3', 'Mozilla 2.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username.',
            validate: usernameInput => {
                if (usernameInput) {
                return true;
                } else {
                console.log('A username is required.');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your prefered email to be contacted about this project.',
            validate: emailInput => {
                if (emailInput) {
                return true;
                } else {
                console.log('An email address is required.');
                return false;
                }
            }
        },
    ]);
}

// function for writing markdown to /dist/index.md
const writeFile = pageContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.md', pageContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
            console.log('File created - check out index.md!')
        })
    });
};

// function call to run app
questions()
    .then(projectData => {
      console.log(projectData);
      return generateMarkdown(projectData);
    })
    .then(page => {
      return writeFile(page);
    })
    .catch(err => {
    console.log(err);
    });

