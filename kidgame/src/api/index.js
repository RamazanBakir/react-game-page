import axios from 'axios';

const URL_SERVER = "http://localhost:3004";

export const getGames = async() => {
    try {
        const response = await axios.get(`${URL_SERVER}/games`);
        return {
            games: response.data
        }
    } catch(error) {
        throw error;
    }
}