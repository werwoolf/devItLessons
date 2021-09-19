import React from 'react';
import PlayerTable from "./PlayerTable";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {players, winner} from "../store/selectors";
import WinnerTable from "./WinnerTable";

const GameField = ({players, winner}) => {

    let playerTables = null;

    if (players) {
        playerTables = players.map((player, index) => <PlayerTable player={player} key={index}/>)
    }

    return <div className='gameField'>
        {players && !winner && playerTables}
        {winner && winner.map((player, index) => <WinnerTable player={player} key={index}/>)}
    </div>;
};

const mapStateToProps = createStructuredSelector({players, winner})

export default connect(mapStateToProps)(GameField);