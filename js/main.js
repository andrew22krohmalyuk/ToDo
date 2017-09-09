const todoForm  = document.getElementById('todo-form');
const addInput  = document.getElementById('add-input');
const todoList  = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');
const addBtn    = document.getElementById('add-button');
const modalContainer = document.getElementById('modal-container');
const modalWindow = document.getElementById('modal-window');
const closeBtn = document.getElementById('btn-close');

addBtn.addEventListener('click',addTodoItem);
closeBtn.addEventListener('click', function(){
    alert('off');
});

function addTodoItem(event) {
    if(addInput.value === '') {
        alert('on');
    } else {
        const listItem = createTodoItem(addInput.value);
        todoList.appendChild(listItem);
    }
};

function alert(flag) {
    if(flag == 'on') {
        modalContainer.classList.add('active');
        modalWindow.classList.add('active');
    } else {
        modalContainer.classList.remove('active');
        modalWindow.classList.remove('active');
    }
};
function createTodoItem(str) {
    addInput.value = '';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const label = document.createElement('label');
    label.innerText = str;
    label.classList.add('title');

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.id = 'textfield';
    editInput.classList.add('textfield');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    const chngBtn = document.createElement('a');
    chngBtn.classList.add('btn');
    chngBtn.classList.add('change');
    chngBtn.innerText = 'Change';

    const dltBtn = document.createElement('a');
    dltBtn.classList.add('btn');
    dltBtn.classList.add('delete');
    dltBtn.innerText = 'Delete';

    btnContainer.appendChild(chngBtn);
    btnContainer.appendChild(dltBtn);

    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(btnContainer);

    bindEvents(listItem);

    return listItem;
}

function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.checkbox');
    const changeButton = todoItem.querySelector('.btn.change');
    const deleteButton = todoItem.querySelector('.btn.delete');

    checkbox.addEventListener('change', toggleTodoItem);
    changeButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
}

function toggleTodoItem() {
    const listItem = this.parentNode;
    listItem.classList.toggle('completed');
}

function editTodoItem() {
    const listItem = this.parentNode.parentNode;
    const title = listItem.querySelector('.title');
    const editInput = listItem.querySelector('#textfield');
    const isActive = listItem.classList.contains('editing');
    const changeBtn = this.parentNode.querySelector('.btn.change');

    if(isActive) {
        //console.log('Сохранили');
        title.innerText = editInput.value;
        changeBtn.innerText = 'Change';
    } else {
        //console.log('Редактируем');
        editInput.value = title.innerText;
        changeBtn.innerText = 'Save';
    }
    listItem.classList.toggle('editing');
}

function deleteTodoItem() {
    const listItem = this.parentNode.parentNode;
    todoList.removeChild(listItem);
}
