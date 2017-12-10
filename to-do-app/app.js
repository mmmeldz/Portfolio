function onReady(){
const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementsById('toDoList');
const delete = document.getElementByClass('delete');
addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  //get the text
  let title = newToDoText.value;
  //create a new li
  let newLi = document.createElement('Li');
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
  //add a delete option
});
}

window.onload = function() {
  onReady();
};
