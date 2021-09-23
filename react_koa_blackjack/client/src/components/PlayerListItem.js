import React from 'react';
import '../styles.scss'

const PlayerListItem = ({player, handleDeletePlayer, index}) => {
    return (
        <div className='playerListItem'>
            <button onClick={() => handleDeletePlayer(index)} className='deletePlayerButton'> X</button>
            <div>{player}</div>

        </div>
    );
};

export default PlayerListItem;