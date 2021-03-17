import { GET_GAMES, GET_GAME_BY_ID } from '../types';


export default function gamesReducer(state={},action) {
    switch(action.type) {
        case GET_GAMES:
            return { ...state, ...action.payload}
        case GET_GAME_BY_ID:
            return { ...state, gameById: action.payload}
        default: 
            return state
    }
}