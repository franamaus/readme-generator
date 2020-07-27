// function to generate markdown for README
const generateLicense = name => {
    let reformatedName = name.split(' ')
    let badgeUrl 
    if (reformatedName[1]) {
        badgeUrl = name.replace(' ', '%20')
    } else {
        badgeUrl = name
    }
    let licenseUrl = {
        'MIT': 'MIT', 
        'ISC': 'ISC', 
        'Apache 2.0': 'Apache-2.0', 
        'Boost 1.0': "BSL-1.0", 
        'GNU GPLv2': "GPL-2.0", 
        'GNU GPLv3': "GPL-3.0", 
        'GNU AGPLv3': "AGPL-3.0", 
        'Mozilla 2.0': 'MPL-2.0', 
        'The Unlicense': 'unlicense'
    }
    return `
[![${name}](https://img.shields.io/badge/License-${badgeUrl}-blue.svg)](https://opensource.org/licenses/${licenseUrl[name]})
    `
}

const generateMarkdown = data => {
    return `
# ${data.projectName} 
${generateLicense(data.license)}
## DESCRIPTION
${data.description}

## TABLE OF CONTENTS
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## INSTALLATION
${data.instalation}

## USAGE
${data.usage}

## CREDITS
${data.credits}

## LICENSE
Accords to __${data.license}__ licensing.
>&copy; ${new Date().getFullYear()} by ${data.username}

## QUESTIONS
For further inquiries, connect with [${data.username}](https://github.com/${data.username}) or write to [${data.email}](mailto:${data.email}).
`
}

module.exports = generateMarkdown;
