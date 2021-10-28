const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach(x => x.addEventListener('click', deleteTodo))
Array.from(todoItem).forEach(x => x.addEventListener('click', markComplete))
Array.from(todoComplete).forEach(x => x.addEventListener('click', markIncomplete))

async function deleteTodo(){
	const todoId = this.parentNode.dataset.id
	try{
		const response = await fetch('/todos/deleteTodo', {
			method: 'delete',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				'todoIdFromJSFile': todoId
			})
		})
		const data = await response.json()
		console.log(data)
		location.reload()
	}catch(err){
		console.log(err)
	}
}

async function markComplete(){
	const todoId = this.parentNode.dataset.id
	try{
		const response = await fetch('/todos/markComplete', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				'todoIdFromJSFile': todoId
			})
		})
		const data = await response.json()
		console.log(data)
		location.reload()
	}catch(err){
		console.log(err)
	}
}

async function markIncomplete(){
	const todoId = this.parentNode.dataset.id
	try{
		const response = await fetch('/todos/markIncomplete', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				'todoIdFromJSFile': todoId
			})
		})
		const data = await response.json()
		console.log(data)
		location.reload()
	}catch(err){
		console.log(err)
	}	
}