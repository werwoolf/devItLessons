import React from 'react';

const PlayerTable = ({player}) => {
    return (
        <div className='playerTable'>
            <span>{player.name}</span>
            <div>{player.rating}</div>
            <div>{player.cards}</div>

        </div>
    );
};

export default PlayerTable;