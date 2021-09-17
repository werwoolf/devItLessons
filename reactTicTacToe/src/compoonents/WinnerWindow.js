import React from 'react';
import {connect} from "react-redux";
import {resetState} from '../store/actions.js'
import {createStructuredSelector} from "reselect";
import {winner} from "../store/selectors.js";
import '../styles.scss';

const WinnerWindow = ({winner, resetState}) => {
    return (
        <div className='WinnerWindow'>
            <div>
                Winner is <strong>"{winner}"</strong>
            </div>
            <button onClick={resetState}>
                New Game
            </button>
        </div>
    );
};

const mapDispatchToProps = {resetState};

const mapStateToProps = createStructuredSelector({winner});

export default connect(mapStateToProps, mapDispatchToProps)(WinnerWindow);
