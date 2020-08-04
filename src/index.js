let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

// my code here

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  //

  h1.innerText = "Todo List";

  app.appendChild(h1);
  //

  const list = document.createElement("ul");
  document.body.append(list);

  for (let i = 0; i < todos.length; i++) {
    let myList = todos[i];
    let listMarkup = `
        
        <li class="list">  
        <input type="checkbox" ${myList.completed ? "checked" : "unchecked"}>
                <label> ${myList.completed} ${myList.description} </label>

            </input>

        </li>
        `;

    list.innerHTML += listMarkup;
  }
}

renderTodoApp();
