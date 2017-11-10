function onReady(){
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  var counter = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value){ return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: counter++
    });
    newToDoText.value = '';
    renderTheUI(toDos);
  }

  function deleteChecked(){
    var i = (toDos.length -1);
    while (i >= 0) {
      if (toDos[i].complete == true){
        toDos.splice(i, 1);
      };
      i--;
    };
    renderTheUI(toDos);
  }

  function updateToDosCompleteStatus(idx){
    //find todo id x, update complete (flip true/false) and renderTheUI
    toDos.forEach(function(toDos){
      if (toDos.id == idx){
        toDos.complete = !toDos.complete;
      };
    });

    renderTheUI(toDos);
  }

  function renderTheUI(toDos){
    const todoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi= document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.checked = toDo.complete;
      checkbox.id = toDo.id;
      newLi.textContent = toDo.title;
      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      checkbox.addEventListener('click', event => {
        event.preventDefault();
        updateToDosCompleteStatus(checkbox.id);
      })
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

//  toDoList.addEventListener('click', event => {
//        event.preventDefault();
//        updateToDosCompleteStatus(toDos.id);
//  })
}

window.onload = function (){
  onReady();
};
