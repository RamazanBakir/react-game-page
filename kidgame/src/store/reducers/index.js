import { combineReducers } from 'redux';
import user from './user_reducer';
import games from './game_reducer';


const appReducers = combineReducers({
    games,
    user
})

export default appReducers;