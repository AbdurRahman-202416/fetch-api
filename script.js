function renderList(list){

 list.map((item,idx)=>{
      	console.log(item.title)
       let container= document.getElementById('todo-container');
      const todoDiv = document.createElement('div');
      todoDiv.className = 'todo';
      todoDiv.innerHTML = `
          <h2>${item.name}</h2>
          <p>Status: ${item.completed ? 'Completed' : 'Not Completed todo '}                         </p>
           <h2> This to-do list id ${item.id}</h2>
      `;
      container.appendChild(todoDiv);

      })

}
fetch('https://nest-todo-production-1ea6.up.railway.app/tasks')
      .then(response => response.json())
      .then(list => {

      	renderList(list);
     
      }
      )