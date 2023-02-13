const generatePage = (team) => {
    console.log(team);
    const page = [];

    const managerInfo = (manager) => {
        console.log(manager);
        let managerHtml = ` 
     <div class="card" style="width: 18rem;">
      <div class ="card-header">
        ${manager.name} <br/>
        <i  class="fas fa-mug-hot"></i>Manager</div>
        <ul class="list-group list-group-flush">
         <li class="list-group-item">ID: ${manager.id}</li>
         <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
         <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </div>`;
    page.push(managerHtml);
    }

const internInfo = (intern) => {
    console.log(intern);
    let internHtml =
     `
     <div class="card" style="width: 18rem;">
     <div class ="card-header">
       ${intern.name} <br/>
       <i  class="fas fa-mug-hot"></i>Intern</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
   </div> `;
   page.push(internHtml);
}
const engineerInfo = (engineer) => {
    console.log(engineer);
    let engineerHtml = 
    `
    <div class="card" style="width: 18rem;">
    <div class ="card-header">
      ${engineer.name} <br/>
      <i  class="fas fa-mug-hot"></i>Engineer</div>
      <ul class="list-group list-group-flush">
       <li class="list-group-item">ID: ${engineer.id}</li>
       <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
       <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
  </div> `
  page.push(engineerHtml);
}

for(let i = 0; i < team.length; i++) {
    if(team[i].getRole() === "Manager") {
        managerInfo(team[i]);
    }
    if(team[i].getRole() === "Intern") {
        internInfo(team[i]);
    }
    if(team[i].getRole() === "Engineer") {
        engineerInfo(team[i]);
    }
}

return page.join('');
}


module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>
    <main> ${generatePage(team)} </main>
     
</body>
</html>
        `};




























//  <div class="w3-card w3-yellow">
//   <p>w3-card</p>
// </div> 