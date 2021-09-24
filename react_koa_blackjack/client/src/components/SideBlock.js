import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {activeGame, winner} from "../store/selectors";
import AddPlayersForm from "./AddPlayersForm";
import BlockGameActionsButtons from "./BlockGameActionsButtons";
import '../styles.scss'
import RestartButtons from "./RestartButtons.js";


const SideBlock = ({activeGame, winner}) => {

    return (
        <div className='sideBlock'>
            {activeGame && <BlockGameActionsButtons/>}
            {winner && <RestartButtons/>}
            {!activeGame && !winner && <AddPlayersForm/>}
        </div>
    );
};


const mapStateToProps = createStructuredSelector({activeGame, winner})

export default connect(mapStateToProps)(SideBlock);