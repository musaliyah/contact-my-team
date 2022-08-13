const inquirer  = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');

const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


const memberArray = [];

const managerQuestions = () => {
    return inquirer.prompt ([
        {
            type: "input",
            message: "What is your team manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your team manager's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your team manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your team manager's office number?",
            name: "number"
        } 
    ]).then(answers => {
        console.log("Your manager's information" + answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number)
        memberArray.push(manager)
        pickTeamMember();
    })
    
};





const pickTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'pickMember',
            messages: 'What member would you like to add to your team roster?',
            choices: ['manager', 'engineer', 'intern', 'done']
        }
    ]).then(input => {
        switch(input.pickMember) {
            case "manager":
                managerQuestions();
                break;
            
            case "engineer":
                engineerQuestions();
                break;
            
            case "intern":
                internQuestions();
                break;
            case "done":
                assemble();
                break;
        } 
    })
}

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your team engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your engineer's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your engineer's GitHub?",
            name: "github"
        }
    ])
    .then((answers) => {
        console.log("Your manager's information: " + answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        memberArray.push(engineer);
        pickTeamMember();

    });
};

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your intern's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "school"
        }
    ])
    .then((answers) => {
        console.log("Your inten's information " + answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.github)
        memberArray.push(intern);
        pickTeamMember();
    })
}

const assemble = () => {
    console.log("Your team is assembled!");
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateHTML(memberArray), "utf-8");

}

pickTeamMember();