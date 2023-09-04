const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const ul = document.querySelector('#ul');


let listItems = []

function userData(e) {
    e.preventDefault();

    let lists = input.value;
    listItems.push(lists);
    ul.innerHTML = ''
    // console.log(listItems);
    addTask()
}


function addTask() {
    
    for (let i = 0; i < listItems.length; i++) {
        lists = listItems[i];
        input.value = '';
        ul.innerHTML += (`<li> ${lists} <button onclick="edits(${i})">Edit</button> <button onclick="deletes(${i})">Delete</button> </li> <br/>`);
    }
}


function deletes(index) {
    listItems.splice(index, 1);
    ul.innerHTML = ''

    addTask()
}


function edits(index) {
    listItems.splice(index, 1, prompt('Enter Edited Value'));
    ul.innerHTML = ''

    addTask()
}

 













































