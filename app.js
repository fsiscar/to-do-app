function onReady(){
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    //console.log("hello2");
    if (!newToDoText){ return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: counter++
    });
    newToDoText.value = '';
    renderTheUI(toDos);
  }

  function deleteChecked(){
    for (i=0;i<toDos.length;i++){
      //console.log(toDos[i]);
      if (toDos[i].complete == "true"){console.log('oi')}
    }
  }

  function updateToDosCompleteStatus(){
    console.log("updateToDosCompleteStatus",toDos);


  }

  function renderTheUI(toDos){
    const todoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi= document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
  })

  deleteButton.addEventListener('click', event => {
        event.preventDefault();
        deleteChecked();
  })

  toDoList.addEventListener('click', event => {
        event.preventDefault();
        updateToDosCompleteStatus();
  })
}

window.onload = function (){
  onReady();
};


''

toDos.forEach(function(toDo){
  const newLi= document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checked.Checked = toDo.complete

  checkbox.id = toDo.id;

  toDos.push({
    title: newToDoText.value,
    complete: false,
    id: counter++
