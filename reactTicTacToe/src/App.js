import Square from "./compoonents/Square.js";
import React from "react";
import WinnerWindow from "./compoonents/WinnerWindow.js";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {gameField, currentStep, winner} from "./store/selectors.js";
import './styles.scss';

const App = ({gameField, currentStep, winner}) => {
    return <>
        {!winner && <div>
            <div className='currentStep'>current step : {currentStep} </div>
            <div className='wrapper'>
                {gameField.map((field, i) => <Square value={field} id={i} key={i}/>)}
            </div>
        </div>}
        {winner && <WinnerWindow/>}
    </>
}

const mapStateToProps = createStructuredSelector({
    gameField,
    currentStep,
    winner
});

export default connect(mapStateToProps)(App);