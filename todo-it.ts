console.log("TodoIt"); 
const todoList: string[] = [];
const todoInput: HTMLInputElement = document.getElementById('todoListContainer') as HTMLInputElement;
// update the todo list 
updateTodoList(); 
    } 
function updateTodoList(): void { 
    console.log("Updating the rendered todo list"); 
    todoListDiv.innerHTML = ''; 
    todoListDiv.textContent = ''; // Edge, ...​ 

    const ul = document.createElement('ul'); 
    ul.setAttribute('id', 'todoList'); 
    todoListDiv.appendChild(ul); 

    todoList.forEach(item => { 
        const li = document.createElement('li'); 
        li.setAttribute('class','todo-list-item'); 
        li.innerText = item; 
        ul.appendChild(li); 
    ); 
} 
}