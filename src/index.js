document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById("create-task-form");
 
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let inputValue = event.target.children[1].value

    newLi = document.createElement("li");
    newLi.innerText = inputValue

    let myTodos = document.getElementById("tasks");
    myTodos.appendChild(newLi)
  })

});


