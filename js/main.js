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
}
