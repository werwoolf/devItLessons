import React from 'react';
import backCard from '../images/backCard.jpeg'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {cardsCount} from "../store/selectors";
import { getCard, pass} from "../store/actions";

const BlockGameActionsButtons = ({cardsCount,getCard, pass}) => {

    return (
        <div className='blockButtonContainer'>
            <span className='cardsCount'> Card count: {cardsCount}</span>
            <img src={backCard} alt='' className='backCard'/>
            <button onClick={getCard}>Get card</button>
            <button onClick={pass}>Pass step</button>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({cardsCount})
const mapDispatchToProps = { getCard, pass}

export default connect(mapStateToProps, mapDispatchToProps)(BlockGameActionsButtons);