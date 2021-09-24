import React from 'react';
import '../styles.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {playersName} from "../store/selectors.js";
import {startGame} from "../store/actions.js";

const RestartButtons = ({playersName, startGame}) => {
    return (
        <div className='restartButtons'>
            <button onClick={()=> startGame(playersName)}>Repeat game</button>
            <button>Start new game</button>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({playersName});
const mapDispatchToProps =  {startGame};

export default connect(mapStateToProps,mapDispatchToProps) (RestartButtons);