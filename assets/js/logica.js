
let users = [];
const calue = setTimeout(() => {
  console.log('hola a los 5 segundos');
}, 5000);

function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(
      (response) => response.json())
    .then(
      (json) => {

        renderUsers(json)
      }
    );

}



function renderUsers(usersList) {
  let container = document.getElementById("users")
  for (let i = 0; i < usersList.length; i++) {
    let user = usersList[i];
    //console.log(user);
    let textNote = document.createTextNode(user)
    let parrafo = document.createElement("p")
    //parrafo.appendChild(textNote)
    container.appendChild(parrafo)
    const template =

      ` <div id="users">
        <p>${user.userID} <br> ${user.id} </p>
        <p>${user.title} <br> ${user.completed} </p>
      </div>`
    container.innerHTML += template




  }
}

getUsers();


