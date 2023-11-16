export const FilteredTodos = (todos, searchValue) => {
	const filteredTodos = Object.entries(todos).filter(([id, { title }]) => {
		return title.toLowerCase().includes(searchValue.toLowerCase())
	})
	return { filteredTodos }
}
