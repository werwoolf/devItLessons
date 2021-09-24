import React from 'react';
import PlayerTable from "./PlayerTable";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {loading, players, winner} from "../store/selectors";
import WinnerTable from "./WinnerTable";
import RestartButtons from "./RestartButtons.js";

const GameField = ({players, winner}) => {
    let playerTables = null;

    if (players) {
        playerTables = players.map((player, index) => <PlayerTable player={player} key={index}/>)
    }

    return <div className='gameField'>
        {winner && <div><RestartButtons/></div>}
        {players && !winner && playerTables}
        {winner && winner.map((player, index) => <WinnerTable player={player} key={index}/>)}
    </div>;
};

const mapStateToProps = createStructuredSelector({players, winner, loading})

export default connect(mapStateToProps)(GameField);