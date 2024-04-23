let taskinput = document.querySelector('#input');
let filters = document.querySelectorAll('button');
let clearAll = document.querySelector('#clear');
let taskBox = document.querySelector('.task-box');


let isEditTask = false;
let editId;
let todos = JSON.parse(localStorage.getItem('todos-list')); //Returns the current value associated with the given key, or null if the given key does not exist. [{"name":"kdkfjk","status":"panding"}....]




//step-6
filters.forEach(btn => {
    btn.addEventListener('click', ()=>{
        //console.log(btn);
        document.querySelector('button.active').classList.remove('active');
        btn.classList.add('active');
        addTask(btn.id);
    })
})


//step 2 ->addTask on browser when enter is pressed
let addTask = (filter) => {
    // Clear existing content in taskBox
    taskBox.innerHTML = '';
    let hasTasks = false;

    if (todos) {
        // if todos exist, push them into taskbox
        todos.forEach((todo, id) => {
            let isCompleted = todo.status == 'completed' ? 'checked' : '';

            if (filter == todo.status || filter == 'all') {
                let liTag = `
                    <li class="task d-flex align-items-center">
                        <input  onclick="updateStatus(this)"  type="checkbox" id="${id}" ${isCompleted}  class="one">      
                        <label for="1" class="flex-grow-1 label ${isCompleted}">${todo.name}</label>
                        <div class="settings d-flex">
                            <button  onclick="editTask(${id}, '${todo.name}')" class=" btn btn-primary mr-2">Edit</button>
                            <button onclick="deleteTask(${id})" class=" btn btn-danger">Delete</button>
                        </div>
                    </li> 
                `;
                taskBox.innerHTML += liTag;
                hasTasks = true;
            }
        });
    }
    if (!hasTasks) {
        // Display a message when no tasks are present on taskbox
        taskBox.innerHTML = '<span>You have no tasks here</span>';
    }
};

addTask("all");


//step 2 ->addTask on browser when enter is   ->before adding filters
// let addTask = () => {
//      // Clear existing content in taskBox
//      taskBox.innerHTML = '';
//     if(todos){   //if todos  exists means input value/todos array is not empty then push in taskbox 
//         todos.forEach((todo, id) => {
//             //console.log(id,todo);
//             //if todo status is completed then set isCompleted value to  checked else not checked
//             let isCompleted = todo.status === 'completed' ? 'checked' : '';           //4th step             
//             let liTag = `
//                 <li class="task d-flex align-items-center">
//                         <input  onclick="updateStatus(this)"  type="checkbox" id="${id}" ${isCompleted}  class="one">      
//                         <label for="1" class="flex-grow-1 label ${isCompleted}">${todo.name}</label>
//                         <div class="settings d-flex">
//                             <button  onclick="editTask(${id}, '${todo.name}')" class=" btn btn-primary mr-2">Edit</button>
//                             <button onclick="deleteTask(${id})" class=" btn btn-danger">Delete</button>
//                         </div>
//                 </li> 
    
//             `
//             taskBox.innerHTML += liTag;
//         });
//     }
// }
// addTask();





//step 5 ->editTask

function editTask(taskid,taskname) {
    // console.log(taskid ,taskname);
    editId = taskid;
    isEditTask = true;
    taskinput.value = taskname;  
}

//step 4 ->deleteTask

function deleteTask(deleteid) {
    // console.log(deleteid);
    todos.splice(deleteid, 1);
    localStorage.setItem('todos-list', JSON.stringify(todos));
    // Update/delete the UI after updating/delete  localStorage
    addTask("all");
}

clearAll.addEventListener('click', ()=>{
    todos.splice(0, todos.length);
    localStorage.setItem('todos-list', JSON.stringify(todos));
    addTask("all");
})

 //step 3 ->updateStatus for each task like -> completed and pending..
let updateStatus = (selectedTask) => {
    //console.log(selectedTask);           //it will gives all selected checkbox with id
    let taskname = selectedTask.parentElement.children[1];       //it will gives all selected  label tag/taskname with name whenever we select checkbox
    //console.log(taskname);
    if(selectedTask.checked){  //jb checkbox select hoga
        taskname.classList.add("checked");
        todos[selectedTask.id].status = "completed";    //update the status os selected task to completed //if chack is selected means task completed ->so id ke through  chackbox ke status ko complete kr do means task complete ho gya  ->and id isliye le rhe bcz hr ek chackbox ke liye krna hai
    }
    else{
        taskname.classList.remove("checked");
        todos[selectedTask.id].status = "pending";  //update the status os selected task to pending//if chack is not selected means task pending ->so id ke through  chackbox ke status ko panding kr do means task abhi  complete nhi hua  
    }
    localStorage.setItem('todos-list',JSON.stringify(todos));   //open application on console ans see on localstorage all task saved on that  and means update the localstorage
    
}


//step-1 addTask in todos array 
taskinput.addEventListener('keyup', function (e) {
    let inputTask = taskinput.value;
    if (e.key === 'Enter' && inputTask) {
        if(!isEditTask){    //means iseditTask  is not true means jb user task ko edit na kr rha  ho tb means bo  new task ko add kr rha tb
                if(!todos){   //todos is an array of object ->if todos doesn't exists ,pass an empty array
                    todos = [];
                }
                let taskInfo ={name:inputTask,status:"pending"};
                todos.push(taskInfo);     //adding new task in todos array 
        }
        else{     //means iseditTask  is  true means jb user task ko edit  kr rha ho tb use place pr(jo jgh hai task ki use pr) edit task add kr do  id ke through ->todos[editId].name = inputTask
            isEditTask = false;
            todos[editId].name = inputTask;
        }
        taskinput.value = '';
        localStorage.setItem('todos-list',JSON.stringify(todos));   //open application on console ans see on localstorage all task saved on that  and todo-list is a key and todos is a value of object on localstorage
        addTask("all"); // add the UI after saving  localStorage
    }
})



//--------------------------------

//step 1  ->addTask in todos array    -> this step is before the edit task
// input.addEventListener('keyup', function (e) {
//     let inputTask = input.value;
//     if (e.key === 'Enter' && inputTask) {
//         if(!todos){   //todos is an array of object ->if todos isn't exists ,pass an empty array
//             todos = [];
//         }
//         input.value = '';
//         let Alltask ={name:inputTask,status:"panding"};
//         todos.push(Alltask);     //adding new task in todos array 
//         localStorage.setItem('todos-list',JSON.stringify(todos));   //open application on console ans see on localstorage all task saved on that  and todo-list is a key and todos is a value of object on localstorage
//         addTask();
//     }
// })






//line -41
//In the context of a checkbox input element, the checked property is a Boolean property that indicates whether the checkbox is currently checked (selected) or not.

// If selectedTask.checked is true, it means the checkbox is checked. so add class
// If selectedTask.checked is false, it means the checkbox is not checked. so remove class bcz chackbox already chaked/true.


//line-43
//todos[selectedTask.id].status  ->todos array of obj me selectedTask.id ke through status ko update kr do



//line-18
// todo.status === 'completed' checks if the status property of the todo object is equal to the string 'completed'.

// If the condition is true, the value of isCompleted will be 'checked'. means task already completed hai  mtlb jb hm page referesh krege tb bhi nhi htega (already completed/selected task)  ->mtlb ek baar complete ho gya to page referesh pr bhi nhi htega

// If the condition is false, the value of isCompleted will be an empty string ''.   means task completed nhi hai -> pending hai    


