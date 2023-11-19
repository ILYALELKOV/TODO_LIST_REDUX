import { onValue, ref } from 'firebase/database'
import { db } from '../../fireBase.js'

// const fetchTodosData = () => {
// 	const tasksDbRef = ref(db, 'posts')
//
// 	return new Promise((resolve) => {
// 		onValue(tasksDbRef, (snapshot) => {
// 			const loadedTasks = snapshot.val() || {}
// 			resolve(loadedTasks)
// 		})
// 	})
// }

// const fetchTodosData = async () => {
// 	const tasksDbRef = ref(db, 'posts')
//
// 	let loadedTasks
//
// 	onValue(tasksDbRef, (snapshot) => {
// 		loadedTasks = snapshot.val() || {}
//
// 		console.log(loadedTasks)
// 	})
// 	await onValue()
// 	return loadedTasks
// }

export const getTodos = (test) => (dispatch) => {
	dispatch({ type: 'GET_TODOS', payload: test })
}

// const fetchTodosData = () => {
// 	const tasksDbRef = ref(db, 'posts')
//
// 	return new Promise((resolve, reject) => {
// 		onValue(
// 			tasksDbRef,
// 			(snapshot) => {
// 				const loadedTasks = snapshot.val() || {}
// 				resolve(loadedTasks)
// 			},
// 			(error) => {
// 				reject(error)
// 			}
// 		)
// 	})
// }
//
// export const getTodos = () => (dispatch) => {
// 	fetchTodosData()
// 		.then((todos) => {
// 			dispatch({
// 				type: 'GET_TODOS',
// 				payload: todos
// 			})
// 		})
// 		.catch((error) => {
// 			// Обработка ошибок при получении данных
// 			console.error('Error fetching todos:', error)
// 		})
// }
