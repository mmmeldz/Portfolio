function onReady(){
const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementById('toDoList');

addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  //get the text
  let title = newToDoText.value;
  //create a new li
  let newLi = document.createElement('li');
  //create a new input
  let checkbox = document.createElement('input');
  //set the inputs type to checkbox
  checkbox.type = "checkbox";
  //set the title
  newLi.textContent = title;
  //attach the checkbox to Li
  newLi.appendChild(checkbox);
  //attach the Li to the UL
  toDoList.appendChild(newLi);
  //empty the input
  newToDoText.value = '';
});
}
  fucntion remove() {
    let deleteButton = document.getElementById('delete');
    deleteButton.value = 0;
    deleteButton.addEventListener("click", removeItem);
    return deleteButton;
  }
});

window.onload = function() {
  onReady();
};
