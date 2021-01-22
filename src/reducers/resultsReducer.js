import {
    INPUT_CHANGE
} from '../actions/types';

const initialState = {
    inputValue: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                inputValue: action.text
            }
            default:
                return state;
    }
}

