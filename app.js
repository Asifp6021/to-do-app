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

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
	//  inserting created dynamic element
	const toDoItemPosition = 'beforeend';
	toDoList.insertAdjacentHTML(toDoItemPosition, item);
};

// i have't created eventlistener so i am testing this function by passing parameter
// addToDo('eating breakfast', 0, false, false);
//  addToDo('eating breakfast', 0, true, false);
//  addToDo('eating breakfast', 0, true, true);

//- - -- - - -- - - - -- - -- -- - - -- - - - --- - - - -- - - -- - - - - -- - -  - - - - - - -
