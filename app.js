const clearBtn = document.querySelector('.clear');
const toDoList = document.querySelector('#list');
const toDoInput = document.querySelector('#input');
const ToDoAddBtn = document.querySelector('.fa-plus-circle');

//- - -- - - -- - - - -- - -- -- - - -- - - - --- - - - -- - - -- - - - - -- -

// storing dynamic icon classes in variable.
const checkBtn = 'fa-check-circle';
const uncheckBtn = 'fa-circle-thin';
const textLineThrough = 'line-through';

// created array container for toDo
let toDoConatainer = [];
let id = 0;

//addToDo function
function addToDo(toDo, id, done, trace) {
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
}
