import React from 'react';

const Card = ({card, size}) => {

    return (
        <div className={size || 'card'}>

            <img src={`./cardSuits/${card.suit}.png`} alt=''/>
            <span>{card.name}</span>
            <span className='bottomName'>{card.name}</span>
            <img src={`./cardSuits/${card.suit}.png`} alt='' className='bottomImage'/>

        </div>
    );
};

export default Card;