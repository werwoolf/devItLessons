import React from 'react';
import Card from "./Card";

const WinnerTable = ({player}) => {

    return (
        <div className='winnerTable'>
            <h2>{player.name} IS WINNER!</h2>
            <h2>HIS HAVE {player.rating} SCORE</h2>
            <div>{player.cards.map((card, index) => <Card card={card} key={index}/>)}</div>
        </div>
    );
};

export default WinnerTable;