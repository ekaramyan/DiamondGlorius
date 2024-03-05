import { defaultState } from '@/initialFormData'

export const validateState = currentState => {
	const keys = Object.keys(defaultState)
	const currentKeys = Object.keys(currentState)
	const isValidStructure = keys.every(key => currentKeys.includes(key))
	return isValidStructure
}
