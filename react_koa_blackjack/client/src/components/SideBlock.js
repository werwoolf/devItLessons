import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {activeGame, authorization, winner} from "../store/selectors";
import AddPlayersForm from "./AddPlayersForm";
import BlockGameActionsButtons from "./BlockGameActionsButtons";
import '../styles.scss'
import RestartButtons from "./RestartButtons.js";
import FindGamesBlock from "./FindGamesBlock";

const SideBlock = ({activeGame, winner, authorization}) => (
    <div className='sideBlock'>
        {activeGame && <BlockGameActionsButtons/>}
        {winner && <RestartButtons/>}
        {!activeGame && !winner && <AddPlayersForm/>}
        {authorization && <FindGamesBlock/>}
    </div>
);


const mapStateToProps = createStructuredSelector({activeGame, winner, authorization});

export default connect(mapStateToProps)(SideBlock);