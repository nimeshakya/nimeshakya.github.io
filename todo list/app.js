const addBtn = document.querySelector('.add-btn');
const tasksContainer = document.querySelector('.tasks-container');

addBtn.addEventListener('click', () => {
    let aTaskContainer = document.createElement('p');
    let checkMarkContainer = document.createElement('span');
    let taskTextContainer = document.createElement('span');
    taskTextContainer.style.textDecoration = 'none';
    let crossIconContainer = document.createElement('span');
    let checkMark = document.createTextNode('✔');
    let crossIcon = document.createElement('i');
    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'taskDiv');

    crossIcon.setAttribute('class', 'removeIcon fas fa-times');
    checkMarkContainer.setAttribute('class', 'checkMarkContainer');
    checkMarkContainer.style.visibility = 'hidden';
    aTaskContainer.setAttribute('class', 'task');

    let task = document.querySelector('.task-input').value;

    if (task === '') {
        alert('Create a title!');
    } else {
        taskTextContainer.append(task);
        checkMarkContainer.append(checkMark);
        crossIconContainer.append(crossIcon);
        taskDiv.append(checkMarkContainer);
        taskDiv.append(taskTextContainer);
        aTaskContainer.append(taskDiv);
        aTaskContainer.append(crossIconContainer);
        tasksContainer.append(aTaskContainer);
        document.querySelector('.task-input').value = '';
    }

    aTaskContainer.addEventListener('click', () => {
        if (taskTextContainer.style.textDecoration === 'none') {
            taskTextContainer.style.textDecoration = 'line-through';
            checkMarkContainer.style.visibility = 'visible';
            aTaskContainer.classList.add('bgchanged');
        } else {
            taskTextContainer.style.textDecoration = 'none';
            checkMarkContainer.style.visibility = 'hidden';
            aTaskContainer.classList.remove('bgchanged');
        }
    });

    crossIconContainer.addEventListener('click', () => {
        tasksContainer.removeChild(aTaskContainer);
    });
});
