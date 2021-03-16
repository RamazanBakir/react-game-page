import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { getGames } from '../../store/actions';
import { Spinner, Button } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import { LinkContainer } from 'react-router-bootstrap';

const HomeGames = () => {
    const homeGames = useSelector(state => state.games);
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);


    useEffect(() => {
        dispatch(getGames({},1,"desc",6))
    },[dispatch])

    const loadMoreGames = () => {
        const page = homeGames.page + 1;
        setLoading(true);
        dispatch(getGames(homeGames,page,"desc",6)).then(() => {
            setLoading(false);
        })
    }
    
    return (
        <>
            <Masonry 
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    homeGames.games ?
                        homeGames.games.map((item) => (
                            <div key={item.id}>
                                a
                            </div>
                        ))
                    :null
                }
            </Masonry>
            { loading ?
                <div style={{ textAlign:'center'}}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">loading...</span>
                    </Spinner>
                </div>
            :null}
            { !homeGames.end & !loading ? 
            <Button 
                variant="outline-dark" 
                onClick={() => loadMoreGames()}
            >
                Get more games
            </Button>
            :null}
        </>
    )    
}

export default HomeGames;