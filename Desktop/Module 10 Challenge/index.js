const inquirer  = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const memberArray = [];



    function pickTeamMember () {
        inquirer
            .prompt ([
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
            ])
            .then(function (selection) {
                switch(selection.team) {
                   
                    case "Manager": managerQuestions();
                        break;

                    case "Engineer": enginnerQuestions();
                        break;

                    case "Intern": internQuestions();
                        break;

                    default: createHTML();

                }

            })
    }

//delete og pickTeamMember later 
// function pickTeamMember (){

    // inquirer 
    //     .prompt([
    //             {
    //             type: "list",
    //             message: "Pick which team member you want to enter information for: ",
    //             name: "team",
    //             choices: [
    //                 "Team Manager",
    //                 "Engineer",
    //                 "Intern",
    //                 "Done"
    //             ]
    //             }   

    // ])
    


    // .then((answers)=> {
       

    //     if (answers.team === "Team Manager")
    //      {
    //         managerQuestions();
    //     }

    //     if (answers.team === "Engineer")
    //     {
    //         enginnerQuestions();
    //     }

    //     if (answers.team === "Intern")
    //     {
    //         internQuestions();
    //     }

    //     if (answers.team === "Done")
    //     {
    //         console.log("An html for your team's information has been created!")
    //         // fs.writeFile("./index.html"),
    //         // generateHTML(memberArray);
    //     }

    // });
// }

function managerQuestions (){
    inquirer
        .prompt([
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
        .then((answers) => {
            
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerNumber)
            memberArray.push(manager);
            pickTeamMember();
            //causes a continous loop because we return back to the past function
        });
}

function enginnerQuestions(){
    inquirer
        .prompt([
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
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
            memberArray.push(engineer);
            pickTeamMember();
            //causes a continous loop because we return back to the past function
        });
}

function internQuestions(){
    inquirer
        .prompt([
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
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
            memberArray.push(intern);
            pickTeamMember();
            //causes a continous loop because we return back to the past function
        });
        
}
// }
userInput();
pickTeamMember();




