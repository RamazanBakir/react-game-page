import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { getGames } from '../../store/actions';
import { Spinner, Button } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import Moment from 'react-moment';
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
                breakpointCols={{default:3, 800: 2, 400: 1}}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    homeGames.games ?
                        homeGames.games.map((item) => (
                            <div key={item.id}>
                                <img
                                    style={{width:'100%',height:'400px'}}
                                    src={item.image}
                                    alt="game images"
                                />
                                <div className="author">
                                    <Moment format="DD MMMM">
                                        {item.createdAt}
                                    </Moment>
                                </div>
                                <div className="author">
                                    <span>{item.author} -</span>  
                                    
                                </div>
                                <div className="content">
                                    <div className="title">{item.title}</div>
                                    <div className="excerpt">{item.excerpt}</div>
                                    <LinkContainer 
                                        className="mt-3"
                                        to={`/article/${item.id}`}
                                    >
                                    <Button 
                                        variant="outline-dark"
                                    >
                                        View Game
                                    </Button>
                                    </LinkContainer>
                                </div>
                                
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