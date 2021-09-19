import React from 'react';
import Card from "./Card";

const PlayerTable = ({player}) => {
    return (
        <div className='playerTable'>
            <span className='playerName'>{player.name}</span>
            <span>player score: {player.rating}</span>
            <div>{player.cards.map((card, index) => <Card card={card} key={index}/>)}</div>
        </div>
    );
};

export default PlayerTable;