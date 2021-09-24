import React from 'react';
import backCard from '../images/backCard.jpeg'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {cardsCount, loading} from "../store/selectors";
import { getCard, pass} from "../store/actions";

const BlockGameActionsButtons = ({cardsCount,getCard, pass, loading}) => {

    return (
        <div className='blockButtonContainer'>
            <span className='cardsCount'> Card count: {cardsCount}</span>
            <img src={backCard} alt='' className='backCard'/>
            <button onClick={getCard} disabled={loading}>Get card</button>
            <button onClick={pass} disabled={loading}>Pass step</button>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({cardsCount, loading})
const mapDispatchToProps = { getCard, pass}

export default connect(mapStateToProps, mapDispatchToProps)(BlockGameActionsButtons);