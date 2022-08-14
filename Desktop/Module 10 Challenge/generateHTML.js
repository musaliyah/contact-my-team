const generateHTML = (team) => {
    const html = [];
    const generateManager = manager => {
        let managerCard = `
        <div class="card employee-card" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${manager.name}</h2>
                <br>Manager</br>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        <div>

        `;
        html.push(managerCard);
    }
    const generateEngineer = engineer => {
        let engineerCard = `
        <div class="card employee-card" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${engineer.name}</h2>
                <br>Engineer</br>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: ${engineer.email}</li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noraferrer>${engineer.github}</a></li>
                </ul>
            </div>
        <div>
        `;
        html.push(engineerCard);
    }
    const generateIntern = intern => {
        let internCard = `
        <div class="card employee-card" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${intern.name}</h2>
                <br>Intern</br>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: ${intern.email}</li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        <div>
        `;
        html.push(internCard);
    }
    
    for (let i=0; i< team.length; i++){
        if(team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if(team[i].getRole() === "Engineer"){
            generateEngineer(team[i]);
        }
        if(team[i].getRole() === "Intern"){
            generateIntern(team[i]);
        }
    }
    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset= "UTF-8"/>
    <meta name= "viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>

    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="../dist/style.css" />
    <body>
    <header>
    <div class="jumbotron jumbotron-fluid text-center">
    <div class="container">
      <h1 class="display-4">My Team</h1>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="cards">
            ${generateHTML(team)}
            </div>
        </div>
    </main>
    </div>
  </div>
    </body>
    </head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    `
}

