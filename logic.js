function addTask() {
    const input = document.getElementById('taskinput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    
    const li = document.createElement('li');
    li.textContent = taskText;


    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);

    
    let taskList = document.getElementById('taskList');
    if (!taskList) {
        taskList = document.createElement('ul');
        taskList.id = 'taskList';
        document.getElementById('my_id').appendChild(taskList);
    }

    taskList.appendChild(li);
    input.value = '';
}
