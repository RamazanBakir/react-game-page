import * as api from '../../api';
import { GET_GAMES, ADD_NEWSLETTER } from '../types';

// games
export const getGames = (homeGames,page,order,limit) => ({
    type: GET_GAMES,
    payload: api.getGames(homeGames,page,order,limit)
})

// users
export const addNewsletter = (data) => ({
    type: ADD_NEWSLETTER,
    payload: api.addNewsletter(data)
})