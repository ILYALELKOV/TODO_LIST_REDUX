import { useEffect, useState } from 'react'
import { Button } from './components/Button/Button.jsx'
import { FormAddTask } from './components/FormAddTask/FormAddTask.jsx'
import { ModalWindow } from './components/ModalWindow/ModalWindow.jsx'
import { SearchForm } from './components/SearchForm/SearchForm.jsx'
import { TodoItem } from './components/TodoItem/TodoItem.jsx'
import { useRequestDeleteTask } from './hooks'
import { useRequestAddTask } from './hooks'
import { useRequestChangeTask } from './hooks'
import { useRequestGetTasks } from './hooks'
import { SortTasks } from './utils'
import { FilteredTodos } from './utils'
import { useRequestClickChangeTask } from './hooks'
import { Loader } from './components/Loader/Loader.jsx'

export const App = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [inputValue, setInputValue] = useState('')
	const [searchValue, setSearchValue] = useState('')
	const [, setDebouncedSearchTerm] = useState('')
	const [sortedTodos, setSortedTodos] = useState(false)

	const { handleClickChangeTask, isModalOpen, setIsModalOpen } =
		useRequestClickChangeTask()

	const { requestDeleteTask } = useRequestDeleteTask()

	const { requestAddTask } = useRequestAddTask(setInputValue)

	const { requestChangeTask } = useRequestChangeTask(isModalOpen)

	const { todos, setTodos } = useRequestGetTasks(setIsLoading)

	const { handleSortTasks } = SortTasks(setSortedTodos, sortedTodos, setTodos)

	const { filteredTodos } = FilteredTodos(todos, searchValue)

	useEffect(() => {
		const debounceTimeout = setTimeout(() => {
			setDebouncedSearchTerm(searchValue)
		}, 300)

		return () => {
			clearTimeout(debounceTimeout)
		}
	}, [searchValue])

	return (
		<div className="container">
			{isModalOpen.isOpen && (
				<ModalWindow
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					requestChangeTask={requestChangeTask}
				/>
			)}
			<h1>TODOS LIST</h1>
			<FormAddTask
				inputValue={inputValue}
				setInputValue={setInputValue}
				onClick={requestAddTask}
			/>
			<SearchForm
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				todos={todos}
			/>
			<Button
				className={'sort'}
				todos={todos}
				onClick={() => handleSortTasks(todos)}
			>
				Sort todos
			</Button>
			{isLoading ? (
				<Loader />
			) : filteredTodos.length > 0 ? (
				filteredTodos.map((todo) => (
					<TodoItem
						key={todo[0]}
						todo={todo}
						onClickChange={handleClickChangeTask}
						onClickDelete={requestDeleteTask}
					/>
				))
			) : (
				<div className="no_tasks">The task list is empty(</div>
			)}
		</div>
	)
}
