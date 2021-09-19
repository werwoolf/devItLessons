import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {activeGame} from "../store/selectors";
import AddPlayersForm from "./AddPlayersForm";
import BlockGameActionsButtons from "./BlockGameActionsButtons";
import '../styles.scss'


const SideBlock = ({activeGame}) => {

    return (
        <div className='sideBlock'>
            {activeGame && <BlockGameActionsButtons/>}
            {!activeGame && <AddPlayersForm/>}
        </div>
    );
};


const mapStateToProps = createStructuredSelector({activeGame})

export default connect(mapStateToProps)(SideBlock);