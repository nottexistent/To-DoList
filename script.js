//Array to story tasks
let tasks = [];

//Function to add tasks
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    
    if (taskText !== ''){
        tasks.push(taskText);
        updateTaskList();
        taskInput.value = '';
    }
}

//function to update the task list
function updateTaskList(){
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        var listItem = document.createElement('li');
        listItem.textContent = task;
        
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<img src="image/cancel-close-button-png-9.png" id="del" />';
        deleteButton.addEventListener('click', () => deleteTask(index));
        
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

//function to delete tasks
function deleteTask(index){
    tasks.splice(index,1);
    updateTaskList();
}


//Initial task list update
updateTaskList();
