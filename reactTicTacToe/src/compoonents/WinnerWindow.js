import React from 'react';
import '../styles.scss';
import {connect} from "react-redux";
import {defaultState} from '../store/actions.js'

const WinnerWindow = ({winner, defaultState}) => {

    return (
        <div className='WinnerWindow'>
            <div>
                {winner}
            </div>
            <button onClick={()=>{
                defaultState()
            }}> New Game</button>
        </div>
    );
};

const mapDispatchToProps = {
    defaultState,
}
const mapStateToProps = state => {
    return {
        winner: state.winner
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WinnerWindow)
