// The contents of this list manage the state of each object in the DOM
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

// This function renderd the items in the UL at the beginning
// and also each time the addToList() function is called
function renderTodoList() {
  let listContainer = document.getElementById("listView"); // get the ul container

  listContainer.innerHTML = ""; // clear it

  // Add each item back to the list with its new / current state from 'todos'
  for (let i = 0; i < todos.length; i++) {
    let myList = todos[i];

    let listMarkup = `
          <li class="list">  
              <input id="${i}" onclick="toggleItem(this)" type="checkbox" ${
      myList.completed ? "checked" : "unchecked"
    }>
                  <label> ${myList.completed} ${myList.description} </label>
              </input>
          </li>`;

    listContainer.innerHTML += listMarkup; // this adds each item to the ul
  }
}

// This function adds a new list item to 'todos' and re-renders the whole list
function addToList() {
  var content = document.getElementById("input").value; // get the value of the input box (its contents)

  var newitem = { completed: false, description: content }; // create new item data for 'todos'

  todos.push(newitem); // add it to the list

  renderTodoList(); // re-render the whole list, including the new item
}

// this makes sure when the item is toggles, its updated in the 'todos' list as well
function toggleItem(targetItem) {
  todos[targetItem.id].completed = targetItem.checked;
  renderTodoList();
}

// this is called once the javascrip file in initially read, to render the initial data
// In the html youll see that the scrip tag is at the bottom instead of in the head tag
// This is so that the JS will be run after the HTML page DOM is rendered, so the items
// arent returned null when JS tries to pull them and edit them
renderTodoList();
