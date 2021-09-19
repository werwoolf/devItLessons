import React from 'react';
import axios from "axios";
import backCard from '../images/backCard.jpeg'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {cardsCount} from "../store/selectors";
import {setGame} from "../store/actions";

const BlockGameActionsButtons = ({cardsCount, setGame}) => {

    async function getCard() {
        const game = (await axios.get('http://localhost:3000/getcard')).data;
        setGame(game)
    }

    async function passStep() {
        let game = (await axios.get('http://localhost:3000/pass')).data
        setGame(game)
    }

    return (
        <div className='blockButtonContainer'>
            <span className='cardsCount'> Card count: {cardsCount}</span>
            <img src={backCard} alt='' className='backCard'/>
            <button onClick={getCard}>Get card</button>
            <button onClick={passStep}>Pass step</button>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({cardsCount})
const mapDispatchToProps = {setGame}

export default connect(mapStateToProps, mapDispatchToProps)(BlockGameActionsButtons);