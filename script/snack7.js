/* SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà "name", "city" "points";
Stampiamo le squadre in pagina, all'interno di una tabella HTML */


var team = [ {
    Name: "Genoa",
    City: "Genova",
    Points: "5"
},
{
    Name: "Roma",
    City: "Roma",
    Points: "7"
},
{
    Name: "Milan",
    City: "Milano",
    Points: "4"
}];

// var tableBody = document.getElementsByTagName("tBody")[0];
var tableBody = document.querySelector("#table tbody");

var tableContent = " ";
for (var i = 0; i < team.length; i++) {
    var currentTeam = team[i];
    tableContent += "<tr>"
    tableContent += "<td>" + currentTeam.Name + "</td>";
    tableContent += "<td>" + currentTeam.City + "</td>";
    tableContent += "<td>" + currentTeam.Points + "</td>";
    tableContent += "</tr>"
}

tableBody.innerHTML = tableContent;