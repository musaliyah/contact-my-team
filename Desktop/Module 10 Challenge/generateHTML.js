function generateHTML (){
function generateManager (manager) {
    return
    `
    <div class="col-4 mt-4">
        <div class="card h-100>
            <div class="card-header">
                <h3>${manager.managerName}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.managerID}</p>
                <p class="email">Email: <a href="mailto${manager.managerEmail}</a></p>
                <p class="number">Office Number: ${manager.managerNumber}</p>
            </div>

        </div>
    </div>
    `;
}

function generateEngineer (engineer) {
    return
    `
    <div class="col-4 mt-4">
        <div class="card h-100>
            <div class="card-header">
                <h3>${engineer.engineerName}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.engineerID}</p>
                <p class="email">Email: <a href="mailto${engineer.engineerEmail}</a></p>
                <p class="number">GitHub: <a href="https://github.com/${engineer.engineerGitHub}">${engineer.engineerGitHub}</a></p>
            </div>

        </div>
    </div>
    `;
}
}