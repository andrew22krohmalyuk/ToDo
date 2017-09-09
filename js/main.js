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
    //console.log(editInput);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    btnContainer.innerHTML = '<a class="btn">Change</a>'
                            +'<a class="btn">Delete</a>';
    //console.log(btnContainer);
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(btnContainer);

    return listItem;
}
