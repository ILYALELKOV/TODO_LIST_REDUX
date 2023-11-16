import { Button } from '../Button/Button.jsx'
import PropTypes from 'prop-types'

export const TodoItem = ({ todo, onClickChange, onClickDelete }) => {
	return (
		<div className="todo_container">
			<p>{todo[1].title}</p>
			<div className="button_container">
				<Button
					className="change_button"
					onClick={() => onClickChange(todo[0], todo[1].title)}
				>
					Change task
				</Button>
				<Button
					className="delete_button"
					onClick={() => onClickDelete(todo[0])}
					inputValue={todo[0]}
				>
					Delete task
				</Button>
			</div>
		</div>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.array,
	onClickChange: PropTypes.func,
	onClickDelete: PropTypes.func
}
