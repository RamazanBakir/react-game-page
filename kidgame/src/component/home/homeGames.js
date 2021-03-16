import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { getGames } from '../../store/actions';

const HomeGames = () => {
    const homeGame = useSelector(state => state.games);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGames())
    },[dispatch])
    return (
        <>
            HomeGames
        </>
    )    
}

export default HomeGames;