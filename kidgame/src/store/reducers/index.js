import { combineReducers } from 'redux';
import user from './user_reducer';
import game from './game_reducer';


const appReducers = combineReducers({
    game,
    user
})

export default appReducers;