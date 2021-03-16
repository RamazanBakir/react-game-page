import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { getGames } from '../../store/actions';
import { Spinner, Button } from 'react-bootstrap';

const HomeGames = () => {
    const homeGame = useSelector(state => state.games);
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);


    useEffect(() => {
        dispatch(getGames({},1,"desc",6))
    },[dispatch])

    const loadMoreGames = () => {
        const page = homeGame.page + 1;
        setLoading(true);
        dispatch(getGames(homeGame,page,"desc",6)).then(() => {
            setLoading(false);
        })
    }
    
    return (
        <>
            { loading ?
                <div style={{ textAlign:'center'}}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">loading...</span>
                    </Spinner>
                </div>
            :null}
            { !homeGame.end & !loading ? 
            <Button 
                variant="outline-dark" 
                onClick={() => loadMoreGames()}
            >
                Load more games
            </Button>
            :null}
        </>
    )    
}

export default HomeGames;