import { GET_GAMES } from '../types';


export default function gamesReducer(state={},action) {
    switch(action.type) {
        case GET_GAMES:
            return { ...state, ...action.payload}
        default: 
            return state
    }
}