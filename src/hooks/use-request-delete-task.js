import { ref, remove } from 'firebase/database'
import { db } from '../fireBase.js'

export const useRequestDeleteTask = () => {
	const requestDeleteTask = (idTask) => {
		const taskDbRef = ref(db, `posts/${idTask}`)
		remove(taskDbRef)
	}

	return {
		requestDeleteTask
	}
}
