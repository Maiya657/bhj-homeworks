(function() {
	const taskInput = document.querySelector('#task__input');
	const tasksForm = document.querySelector('#tasks__form');
	const tasks = JSON.parse(localStorage.getItem('localTasks')) || [];
	const tasksList = document.querySelector('#tasks__list');

	const render = () => {
		tasksList.innerHTML = '';
		tasks.forEach((task, index) => {
			const div = document.createElement('div');
			div.classList.add('task');

			const title = document.createElement('div');
			title.classList.add('task__title');
			title.textContent = task;
			div.appendChild(title);

			const taskRemove = document.createElement('a');
			taskRemove.classList.add('task__remove');
			taskRemove.innerHTML = '&times;';
			div.appendChild(taskRemove);
			taskRemove.addEventListener('click', event => {
				event.preventDefault();
				tasks.splice(index, 1);
				localStorage.setItem('localTasks', JSON.stringify(tasks));
				render();
			})

			tasksList.appendChild(div);
		})
	}

	tasksForm.addEventListener('submit', event => {
		event.preventDefault();
		tasks.push(taskInput.value);
		localStorage.setItem('localTasks', JSON.stringify(tasks));
		render();
		tasksForm.reset();
	})

	render();
})()