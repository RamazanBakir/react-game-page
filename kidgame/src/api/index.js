import axios from 'axios';

const URL_SERVER = "http://localhost:3004";

export const getGames = async(prevState,page=1,order="asc",limit="10") => {
    try {
        // NOTE: the link below is to direct me on how to sort, and set the limit of games that can be on the homepage.
        // http://localhost:3004/games?/_page=1&_limit=6&_order=desc&_sort=id
        const response = await axios.get(`${URL_SERVER}/games?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);
        return {
            games: prevState.games ? [...prevState.games,...response.data] : response.data,
            page: page,
            end: response.data.length === 0 ? true : false
        }
    } catch(error) {
        throw error;
    }
}