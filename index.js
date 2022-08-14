const inquirer  = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const path = require("path");
// Referenced: https://nodejs.org/api/path.html
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Creates an array for team member's information to be stored within
const memberArray = [];

// Prompts user with Manager questions (name, id, email, office number)
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
            name: "officeNumber"
        } 
    ]).then(answers => {
        // Stores user input into Manager object, which is pushed into the memberArray. 
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        memberArray.push(manager)
        pickTeamMember();
    })
    
};

// Prompts user to pick which type of team member they would like to input information for

const pickTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'pickMember',
            messages: 'What member would you like to add to your team roster?',
            choices: ['manager', 'engineer', 'intern', 'done']
        }
    ]).then(input => {
        // Referenced: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
        // Switch statements that determine various paths based on user's input and choices. When the user selects done, the assemble() function is called to incorpate all of the responses. 
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

// Similar to managerQuestions function, the engineerQuestions function prompts user's with Engineer questions and then stores their responses into an engineer object, which is then added to the memberArray. 
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
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        memberArray.push(engineer);
        pickTeamMember();

    });
};
// Functions in similar way as the engineerQuestions() and managerQuestions() functions. 
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
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        memberArray.push(intern);
        pickTeamMember();
    })
}
// The assemble() function sends the user's input as an array, and inputs it into an html template which populates the output folder. 
const assemble = () => {
    console.log("Your team is assembled!");
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateHTML(memberArray), "utf-8");

}
// Loops prompts until user selects done
pickTeamMember();