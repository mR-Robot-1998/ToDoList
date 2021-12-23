///selectors

const input=document.querySelector('.todo-input')
const plusButton=document.querySelector('.todo-button')
const todolist=document.querySelector('.todolist')
const filterOp=document.querySelector('.filters-todo')





//event Listner
plusButton.addEventListener("click",addtodo)
todolist.addEventListener("click",checkRemove)
filterOp.addEventListener("click",filtertodos)

//function

function addtodo(e){
  e.preventDefault();

  const todoDiv=document.createElement("div");

  todoDiv.classList.add("todo");

  const newTodo=`<li>${input.value}</li>
  <span><i class="fas fa-check-square"></i></span>
  <span><i class="fas fa-trash-alt"></i></span>`

  todoDiv.innerHTML=newTodo;
  //apend to todolist
  todolist.appendChild(todoDiv);
  input.value='';
}



function checkRemove(e){
  const classlist=[...e.target.classList]
  const item=e.target;
  const todo=item.parentElement.parentElement;
  console.log(classlist)
  if(classlist[1]==="fa-check-square"){
    todo.classList.toggle("completed")
  }else if(classlist[1]==="fa-trash-alt"){
    todo.remove();
  }
}



function filtertodos(e){
  const todos=[...todolist.childNodes];
  todos.forEach((item) => {
    console.log(item)
    switch (e.target.value) {
      case 'all':
        item.style.display="flex";
        break;
      case "completed":
         if(item.classList.contains("completed")){
          item.style.display="flex";
        } else {
           item.style.display='none';
         }
         break;
      case "uncompleted":
        if(!item.classList.contains("completed")){
             item.style.display="flex"
           } else {
             item.style.display="none"
           }
           break;
         }
  })
};
