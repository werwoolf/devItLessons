import React from 'react';
import PlayerTable from "./PlayerTable";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {players} from "../store/selectors";

const GameField = ({players}) => {

    let playerTables = null;

    if (players) {
        console.log(players)
        playerTables = players.map((player, index) => <PlayerTable player = {player} key={index}/>)
    }

    return (
        <div className='gameField'>
            {players && playerTables}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({players})

export default connect(mapStateToProps)(GameField);