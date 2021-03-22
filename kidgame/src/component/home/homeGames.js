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
            <div className="row" style={{ marginBottom:'5px', height:'200px', padding:'0'}}>
                <div className="smaldoc col-4"></div>
                <div className="firstaid col-4"></div>
                <div className="doctors col-4"></div>
            </div>
        <div className="card">
            
            <Masonry 
                breakpointCols={{default:3, 800: 1, 400: 1}}
                className="my-masonry-grid card-columns"
                columnClassName="my-masonry-grid_column"
            >
                {
                    homeGames.games ?
                        homeGames.games.map((item) => (
                            <div key={item.id}>
                                <div className="img-hover-zoom">
                                    <img
                                    style={{width:'100%',height:'300px'}}
                                    src={item.image}
                                    alt="game images"
                                />
                                </div>
                                
                                
                                <div className="content">
                                    <div className="time">
                                        <Moment format="DD MMMM">
                                            {item.createdAt}
                                        </Moment>
                                    </div>
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <LinkContainer 
                                        className="mt-3"
                                        to={`/about/${item.id}`}
                                    >
                                    <Button className="viewGameBtn"
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
            </div>
            { loading ?
                <div style={{ textAlign:'center'}}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">loading...</span>
                    </Spinner>
                </div>
            :null}
            { !homeGames.end & !loading ? 
            <Button 
                className="loadMoreGameBtn center"
                variant="outline-dark" 
                onClick={() => loadMoreGames()}
            >
                Load More Games
            </Button>
            :null}
        </>
    )    
}

export default HomeGames;