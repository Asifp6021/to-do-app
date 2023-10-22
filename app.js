const clearBtn = document.querySelector('.clear');
const toDoList = document.querySelector('#list');
const toDoInput = document.querySelector('#input');
const ToDoAddBtn = document.querySelector('.fa-plus-circle');

//- - -- - - -- - - - -- - -- -- - - -- - - - --- - - - -- - - -- - - - - -- - -  - - - - - - -

// storing dynamic icon classes in variable.
const checkBtn = 'fa-check-circle';
const uncheckBtn = 'fa-circle-thin';
const textLineThrough = 'line-through';

//- - -- - - -- - - - -- - -- -- - - -- - - - --- - - - -- - - -- - - - - -- - -  - - - - - - -

// created array container for toDo
let toDoConatainer = [];
let id = 0;

//- - -- - - -- - - - -- - -- -- - - -- - - - --- - - - -- - - -- - - - - -- - -  - - - - - - -

//addToDo function
function addToDo(toDo, id, done, trash) {
	if (trash) return;

	const toDoDone = done ? checkBtn : uncheckBtn;
	const toDoLine = done ? textLineThrough : '';

	// dynamic elemenents
	const item = `
                    <li class="item">
                        <i class="fa ${toDoDone} complete" status="compelte" id="${id}"></i>
                        <p class="text ${toDoLine}">${toDo}</p>
                        <i class="fa fa-trash-o delete" status="delete" id="${id}"></i>
                    </li>
                `;

	//  inserting created dynamic element
	const toDoItemPosition = 'beforeend';
	toDoList.insertAdjacentHTML(toDoItemPosition, item);
}

//- - -- - - -- - - - -- - -- -- - - -- - - - --- - - - -- - - -- - - - - -- - -  - - - - - - -

//Adding a to-do to the list when the enter key is pressed
document.addEventListener('keyup', displayToDo);

//Adding a to-do to the list when plus icon is clicked
ToDoAddBtn.addEventListener('click', displayToDo);

// displayToDo function
function displayToDo(event) {

    if (event.keyCode === 13 || event.target.classList.value === 'fa fa-plus-circle') {

        // getting input value 
        const toDo = input.value;

        //checking whether the input field is not empty
        if(toDo) {
            addToDo(toDo, id, false, false);
            toDoConatainer.push({
                name: toDo,
                id: id,
                done: false,
                trash: false,
            });

            id++;
        }

        input.value = '';
    }
}

//- - -- - - -- - - - -- - -- -- - - -- - - - --- - - - -- - - -- - - - - -- - -  - - - - - - -