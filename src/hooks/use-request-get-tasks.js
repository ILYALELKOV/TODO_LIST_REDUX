import { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from '../fireBase.js'

export const useRequestGetTasks = (setIsLoading) => {
	const [todos, setTodos] = useState([])
	useEffect(() => {
		const tasksDbRef = ref(db, 'posts')

		return onValue(tasksDbRef, (snapshot) => {
			const loadedTasks = snapshot.val() || {}
			setTodos(loadedTasks)
			setIsLoading(false)
		})
	}, [])

	return {
		todos,
		setTodos
	}
}
