export const SortTasks = (setSortedTodos, sortedTodos, setTodos) => {
	const handleSortTasks = (todos) => {
		const todosCopy = { ...todos }

		const newSortedTodos = !sortedTodos
		const sortedEntries = Object.entries(todosCopy).sort(
			([id1, { title: title1 }], [id2, { title: title2 }]) => {
				return newSortedTodos
					? title1.localeCompare(title2)
					: title2.localeCompare(title1)
			}
		)

		const sortedTasks = Object.fromEntries(sortedEntries)

		setSortedTodos(newSortedTodos)

		setTodos(sortedTasks)
	}

	return { handleSortTasks }
}
