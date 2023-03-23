// this is a scipt client file that loaded from the html file
// window on load , send a test connection to localhost port 3000

let socket = new WebSocket("ws://localhost:3000");

socket.onopen = function (e) {
  // send message to the server to get all users
  socket.send(JSON.stringify({
    type: "getUsers",
    data: {
      id: null
    }
  }));
}

socket.onmessage = function (event) {
  let parsedEvent = JSON.parse(event.data);
  const data = parsedEvent.data;
  renderHtml(data);
}


function renderHtml(data) {
  const cards = [];
  const wrapper = document.getElementById("wrapper");
  wrapper.innerHTML = "";
  
  for (let key in data) {
    const card = document.createElement("div");
    card.className = "card";
    const id = document.createElement("p");
    id.innerText = data[key].id;
    const firstName = document.createElement("p");
    firstName.innerText = data[key].firstName;
    const lastName = document.createElement("p");
    lastName.innerText = data[key].lastName;
    const email = document.createElement("p");
    email.innerText = data[key].email;
    card.appendChild(id);
    card.appendChild(firstName);
    card.appendChild(lastName);
    card.appendChild(email);
    cards.push(card);
  }
  cards.forEach(card => {
    wrapper.appendChild(card);
  })
}