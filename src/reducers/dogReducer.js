import { types } from '../types/types'

const initialState = {
    dog: [],
    active: {
        url: '',
        name: '',
        description: ''
    }
}

export const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.dogPost:
            return {
                ...state,
                dog: [action.payload, ...state.dog]
            }
        case types.dogGet:
            return {
                ...state,
                dog: [...action.payload]
            }

        case types.dogActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.LogoutClean:
            return {
                ...state,
                active: {
                    url: '',
                    name: '',
                    description: ''
                }
            }
        default:
            return state;
    }
}
