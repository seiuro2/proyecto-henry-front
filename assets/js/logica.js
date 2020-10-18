let users = [];
const calue = setTimeout(() => {
  console.log('hola a los 5 segundos');
}, 5000);

function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      /*   renderUsers(json) */
      console.log(json);
      renderUsers(json);
    });
}

function renderUsers(usersList) {
  users = usersList;
  const container = document.getElementById('userContainer');
  usersList.forEach((user) => {
    const template = ` <div class="user"  data-id="${user.id}" data-name="${user.name}" id= "user-${user.id}">
        <p>${user.name} <br> ${user.username} </p>
        <p>${user.email} <br> ${user.address.street} </p>
      </div>`;
    container.innerHTML += template;
    let userElement = document.getElementById(`user-${user.id}`);

    /*  console.log(template); */
  });
  clickElement();
  /* let newList = [];
  usersList.forEach(function (user, index) {
    newList.push(user.phone);
  });
  console.log(newList); */
  /* let newList = usersList.map(function (user) {
    return user.phone; 
  });
  console.log(newList); */

  /*  for (let i = 0; i < usersList.length; i++) {
    let user = usersList[i];
    //console.log(user);
    let textNote = document.createTextNode(user)
    let parrafo = document.createElement("p")
    console.log(parrafo);
    //parrafo.appendChild(textNote)
    //container.appendChild(parrafo)
    const template =

      ` <div id="users">
        <p>${user.name} <br> ${user.username} </p>
        <p>${user.email} <br> ${user.addres} </p>
      </div>`
    container.innerHTML += template
    console.log(template);*/
}
function clickElement() {
  const userElements = document.getElementsByClassName('user');
  Array.from(userElements).forEach(function (user) {
    user.addEventListener('click', function () {
      console.log('click', Number(this.dataset.id));
    });
  });
}
function showUser(userID) {}
getUsers();
