import { configureStore } from '@reduxjs/toolkit'
import localStorageMiddleware from './localStorageMiddleware'
import reducer from './reducers'

const store = configureStore({
	reducer: reducer,
	middleware: () => [localStorageMiddleware],
})

export default store
