import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {activeGame, winner} from "../store/selectors";
import AddPlayersForm from "./AddPlayersForm";
import BlockGameActionsButtons from "./BlockGameActionsButtons";
import '../styles.scss'


const SideBlock = ({activeGame, winner}) => {

    return (
        <div className='sideBlock'>
            {activeGame && <BlockGameActionsButtons/>}
            {!activeGame && !winner && <AddPlayersForm/>}
        </div>
    );
};


const mapStateToProps = createStructuredSelector({activeGame, winner})

export default connect(mapStateToProps)(SideBlock);