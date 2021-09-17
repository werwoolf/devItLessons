import Square from "./compoonents/Square.js";
import React from "react";
import WinnerWindow from "./compoonents/WinnerWindow.js";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {gameField,currentStep,winner} from "./store/selectors.js";
import './styles.scss'

const App = ({gameField, currentStep, winner}) => {
    return <>
        {!winner && <div>
            <div className='currentStep'>current step : {currentStep} </div>
            <div className='wrapper'>
                <Square value={gameField[0]} id={0}/>
                <Square value={gameField[1]} id={1}/>
                <Square value={gameField[2]} id={2}/>

                <Square value={gameField[3]} id={3}/>
                <Square value={gameField[4]} id={4}/>
                <Square value={gameField[5]} id={5}/>

                <Square value={gameField[6]} id={6}/>
                <Square value={gameField[7]} id={7}/>
                <Square value={gameField[8]} id={8}/>
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