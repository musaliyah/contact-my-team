const generateHTML = (team) => {
    const html = [];
    const generateManager = manager => {
        let managerCard = `
        <div class ="card" style="width: 18rem;">
            <div class ="card-header">
            ${manager.name} </br>
            <i class=:fas fa-mug-hot"></i>Manager</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.number}</li>
                </ul>
            </div>
        `;
        html.push(managerCard);
    }
    const generateEngineer = engineer => {
        let engineerCard = `
        <div class ="card" style="width: 18rem;">
            <div class ="card-header">
            ${engineer.name} </br>
            <i class=:fas fa-mug-hot"></i>Manager</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">GitHub Username: <a target="_blank" href="https://github.com/${engineer.github}>${engineer.github}</a></li>
                </ul>
            </div>
        `;
        html.push(engineerCard);
    }
    const generateIntern = intern => {
        let internCard = `
          <div class ="card" style="width: 18rem;">
            <div class ="card-header">
            ${intern.name} </br>
            <i class=:fas fa-mug-hot"></i>Manager</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
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
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Fluid jumbotron</h1>
      <p class="lead">My Team</p>
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
