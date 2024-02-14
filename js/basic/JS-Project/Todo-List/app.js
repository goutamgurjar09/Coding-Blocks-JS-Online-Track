let input = document.querySelector('#input');
let all = document.querySelector('#all');
let pending = document.querySelector('#pending');
let completed = document.querySelector('#completed');
let clear = document.querySelector('#clear');
let taskBox = document.querySelector('.task-box');
//let edit = document.querySelector('#edit');
let deleteTask = document.querySelectorAll('.delete');

//step 1  ->addTask 
input.addEventListener('keyup', function (e) {
    let inputTask = input.value;
    if (e.key === 'Enter' && inputTask) {
        addTask(inputTask);
        input.value = '';
    }
})
let addTask = (inputTask) => {
    //console.log(inputTask);
    let liTag = `
                <li class="task d-flex align-items-center">
                        <input type="checkbox" id="1" class="one">
                        <label for="1" class="flex-grow-1 label">${inputTask}</label>
                        <div class="settings d-flex">
                            <button  class="edit btn btn-primary mr-2">Edit</button>
                            <button  class="delete btn btn-danger">Delete</button>
                        </div>
                </li> 
    
    `
    taskBox.innerHTML += liTag;
    
}

//step 2 -> edit task


// Add an event listener for the newly created "Edit" button
let editBtns = document.querySelectorAll('.edit');

// Add the rest of your existing code here



