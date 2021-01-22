import { createStore } from 'redux'
import resultsReducer from './reducers/resultsReducer'

const initialState = {
    inputValue: ''
}


const store = createStore(resultsReducer, initialState);

export default store;