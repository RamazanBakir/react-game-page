import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGameById } from '../../store/actions';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import NewsLetter from '../utils/newsletter';

const GamesComponent = (props) => {
    const game = useSelector(state => state.games);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getGameById(props.match.params.id))
    },[dispatch,props.match.params.id])

    return (
        <>
            {
                game.gameById ?
                <div className="about_container">
                    <h1>{game.gameById.title}</h1>
                    <div className="image" style={{ background: `url(${game.gameById.imagexl})`}}>
                    </div>
                        <Button variant="primary" className="mt-3">
                            Play game now
                        </Button>
                    <div className="author">
                        <Moment format="DD MMMM">
                            {game.gameById.createdAt}
                        </Moment>
                    </div>
                    <div className="author">
                        Created by:  <span>{game.gameById.author} </span>
                    </div>
                    <div className="mt-3 content">
                        <div dangerouslySetInnerHTML={{
                            __html: game.gameById.content
                        }}>
                        </div>
                        
                    </div>
                    
                </div>
                :null
            }
            <NewsLetter />
        </>
    )    
}

export default GamesComponent;