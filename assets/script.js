const todoList = [{
    listItems: 'finish javascript', 
    dueDate: '28/08/2023'
  },{
    listItems:'write the Readme file',
    dueDate: '28/08/2023'
  }];

  function youDidIt() {
    alert("Well Done, You finished the task!!!");
  }
  
  makeAvailableTodoList();
  
  function makeAvailableTodoList(){
  
    let todoListHTML = '';
  
    for (let i = 0; i < todoList.length; i++ ) {
      const objectTodo = todoList[i];
      const {listItems,dueDate} = objectTodo;
      const html = `
        <div>${listItems}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${i},1);
          makeAvailableTodoList();
          youDidIt();
        "class="delete-todo-button">Delete</button>
        `;
      todoListHTML += html;
    };
   
  
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
  };
  
  
  function addTodo() {
    const inputElement = document.querySelector('.js-items-input');
    const listItems = inputElement.value;
  
    const dateInputElement = document.querySelector('.js-due-date-input-area');
    const dueDate = dateInputElement.value;
    
    todoList.push({
      listItems,
      dueDate
  
    });
    
    
    inputElement.value = '';
  
    makeAvailableTodoList();
  
  };
  