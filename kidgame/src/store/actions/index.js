import * as api from '../../api';
import { GET_GAMES } from '../types';

export const getGames = () => ({
    type: GET_GAMES,
    payload: api.getGames()
})