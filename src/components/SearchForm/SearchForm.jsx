import PropTypes from 'prop-types'

export const SearchForm = ({ searchValue, setSearchValue, todos }) => {
	return (
		<form className="search_container">
			<input
				disabled={Object.keys(todos).length <= 0}
				value={searchValue}
				type="text"
				className="search_input"
				placeholder="Search task..."
				onChange={(event) => setSearchValue(event.target.value)}
			/>
		</form>
	)
}

SearchForm.propTypes = {
	searchValue: PropTypes.string,
	setSearchValue: PropTypes.func,
	todos: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
