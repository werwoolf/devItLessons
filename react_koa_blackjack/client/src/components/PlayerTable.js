import React from 'react';
import Card from "./Card";

const PlayerTable = ({player}) => {
    return (
        <div className='playerTable'>
            <div>
                <span className='playerName'>{player.name}</span>
                <span>player score: {player.rating}</span>
            </div>
            {player.cards.map((card, index) => <Card card={card} key={index}/>)}
        </div>
    );
};

export default PlayerTable;