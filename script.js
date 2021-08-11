// Selecting Elements
let addBtn = document.querySelector('#add');
let todoContainer = document.querySelector('#list');
let inputElement = document.querySelector('#inputElement');

// Adding Event Listeners
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (inputElement.value !== '') {
        // Creating li element
        let todoElement = document.createElement('li');
        todoElement.innerHTML = inputElement.value;
        
        // Creating close button
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('close');
        removeBtn.innerHTML = 'X';

        // Creating completed button
        let completedBtn = document.createElement('button');
        completedBtn.classList.add('completed');
        completedBtn.innerHTML = '✔';

        // Appending close button to li element and  then appending li element to ul element
        todoElement.appendChild(removeBtn);
        todoElement.appendChild(completedBtn);
        todoContainer.appendChild(todoElement);

        // Resetting the input value
        inputElement.value = "";

        // Adding event listeners to completed button
        completedBtn.addEventListener('click', () => {
            todoElement.classList.toggle('lineThrough')
        })

        // Adding event listeners to button element
        removeBtn.addEventListener('click', () => {
            todoElement.classList.add('deleteTodo')
        })
    } 
    // when input value is empty
    else {
        alert ('No input. Write Something')
    }
}) 