import React from 'react';
import '../styles.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {playersName} from "../store/selectors.js";
import {startGame, abortGame} from "../store/actions.js";

const RestartButtons = ({playersName, startGame, abortGame}) => {
    return (
        <div className='restartButtons'>
            <button onClick={()=> startGame(playersName)}>Repeat game</button>
            <button onClick={abortGame}>Start new game</button>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({playersName});
const mapDispatchToProps =  {startGame, abortGame};

export default connect(mapStateToProps,mapDispatchToProps) (RestartButtons);