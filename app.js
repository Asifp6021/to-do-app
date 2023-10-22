const clearBtn = document.querySelector('.clear');
const toDoList = document.querySelector('#list');
const toDoInput = document.querySelector('#input');
const ToDoAddBtn = document.querySelector('.fa-plus-circle');

//- - -- - - -- - - - -- - -- -- - - -- - - - --- - - - -- - - -- - - - - -- -

// storing dynamic icon classes in variable.
const checkBtn = 'fa-check-circle';
const uncheckBtn = 'fa-circle-thin';
const textLineThrough = 'line-through';

//addToDo function
function addToDo(toDo, id, done, trace) {
	const toDoDone = done ? checkBtn : uncheckBtn;
	const toDoLine = done ? textLineThrough : '';
}
