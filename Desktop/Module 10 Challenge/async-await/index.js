const inquirer  = require('inquirer');

function pickTeamMember (){

    inquirer 
        .prompt([
                {
                type: "list",
                message: "Pick which team member you want to enter information for: ",
                name: "team",
                choices: [
                    "Team Manager",
                    "Engineer",
                    "Intern",
                    "Done"
                ]
                }   

    ])
    


    .then((answers)=> {
       

        if (answers.team === "Team Manager")
         {
            teamManagerQuestions();
        }

        if (answers.team === "Engineer")
        {
            enginnerQuestions();
        }

        if (answers.team === "Intern")
        {
            internQuestions();
        }

        if (answers.team === "Done")
        {
            console.log("An html for your team's information has been created!")
        }

    });
}

function teamManagerQuestions (){
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
            pickTeamMember();
            //causes a continous loop because we return back to the past function
        });
}



pickTeamMember();
