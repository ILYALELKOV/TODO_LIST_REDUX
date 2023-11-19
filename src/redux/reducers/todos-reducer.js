// const initialState = {}
//
// export const todosReducer = (state = initialState, action) => {
// 	const { type, payload } = action
//
// 	switch (type) {
// 		case 'GET_TODOS': {
// 			return payload
// 		}
//
// 		default:
// 			return state
// 	}
// }

import { onValue, ref } from 'firebase/database'
import { db } from '../../fireBase.js'

// const initialState = async () => {
// 	const tasksDbRef = ref(db, 'posts')
//
// 	return new Promise((resolve) => {
// 		onValue(tasksDbRef, (snapshot) => {
// 			const loadedTasks = snapshot.val() || {}
// 			resolve(loadedTasks)
// 		})
// 	})
// }
const initialState = {}

export const todosReducer = (state = initialState, action) => {
	console.log(action)
	const { type, payload } = action

	switch (type) {
		case 'GET_TODOS': {
			return payload
		}

		default:
			return state
	}
}
