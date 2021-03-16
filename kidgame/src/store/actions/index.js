import * as api from '../../api';
import { GET_GAMES } from '../types';

export const getGames = (homeGames,page,order,limit) => ({
    type: GET_GAMES,
    payload: api.getGames(homeGames,page,order,limit)
})