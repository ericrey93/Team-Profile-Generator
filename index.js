const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./src/generatehtml');
const dist = path.resolve(__dirname, "dist");
const distPath = path.join(dist, "index.html");
const teamMembers = [];

const managerInput = () => {
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter your ID number.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
    },
    {
        type:'input',
        name: 'officeNumber',
        message: 'Please enter your office number.'
    }
]).then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    selectMember()
})};

const selectMember= () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please choose the member you want to add.',
            choices: ['Add an intern', 'Add an engineer', 'I have finished my team']
        }
    ]).then(userChoice => {
        switch (userChoice.menu) {
            case 'Add an intern':
                internChoice();
                break;
            case 'Add an engineer':
                engineerChoice();
                break;
            case 'I have finished my team':
                buildTeam();
        }
    })
}

const internChoice = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter interns ID number.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter interns email.',
        },
        {
            type:'input',
            name: 'school',
            message: 'Please enter interns school name.'
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamMembers.push(intern);
        return selectMember();
    })
}

const engineerChoice = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter engineers ID number.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter engineers email.',
        },
        {
            type:'input',
            name: 'github',
            message: 'Please enter engineers github.'
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamMembers.push(engineer);
        return selectMember();
    })
}

const buildTeam = () => {
    if(!fs.existsSync(dist)) {
        fs.mkdirSync(dist)
    }
    fs.writeFileSync(distPath, generateHtml(teamMembers), 'utf-8');

    console.log("Your team page has been generated!");
};


managerInput();


