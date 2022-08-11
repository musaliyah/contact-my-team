const inquirer  = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');

const path = require("path");
// const OUTPUT_DIR = path.resolve(___dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


const memberArray = [];
const pickTeamMember = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Pick an employee to add to your team and input information about: ",
            name: "team",
            choices: [
                "Team Manager",
                "Engineer",
                "Intern",
                "Done"
            ]

        }
    ]).then(userInput => {
        switch (userInput.team) {
            case "Team Manager" : managerQuestions();
                break;

            case "Engineer" : engineerQuestions();
                break;
            
            case "Intern" : internQuestions();
                break;
            // default: createTeam();

        }
    });
};

const managerQuestions = () => {
    return inquirer.prompt ([
        {
            type: "input",
            message: "What is your team manager's name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is your team manager's employee ID?",
            name: "managerID"
        },
        {
            type: "input",
            message: "What is your team manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is your team manger's office number?",
            name: "managerNumber"
        } 
    ])
    .then((answers =>{
        console.log("Your manager's information" + answers);
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerNumber)
        memberArray.push(manager)
        pickTeamMember();
    }))
    
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your team engineer's name?",
            name: "engineerName",
        },
        {
            type: "input",
            message: "What is your engineer's employee ID?",
            name: "engineerID"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is your engineer's GitHub?",
            name: "engineerGitHub"
        }
    ])
    .then((answers) => {
        console.log("Your manager's information: " + answers);
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
        memberArray.push(engineer);
        pickTeamMember();

    });
};

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName",
        },
        {
            type: "input",
            message: "What is your intern's employee ID?",
            name: "internID"
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool"
        }  
    ])
    .then((answers) => {
        console.log("Your intern's information: " + answers);
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
        memberArray.push(intern);
        pickTeamMember();
    })
}

// const createTeam = () => {
//     console.log("Your team has been created!");

//     if(!fs.existsSync(OUTPUT_DIR)){
//         fs.mkdirSync(OUTPUT_DIR)
//     }
//     fs.writeFileSync(outpath, generateHTML(completeTeam), "utf-8");
// }

pickTeamMember();