import Square from "./compoonents/Square.js";
import React, {useEffect, useMemo} from "react";
import WinnerWindow from "./compoonents/WinnerWindow.js";
import './styles.scss'
import {connect} from "react-redux";
import {checkWinner} from "./helpers.js";
import {addWinner} from "./store/actions.js";

const App = ({stateGameField, currentStep, winner, addWinner}) => {
    const newWinner = useMemo(
        () => checkWinner(stateGameField),
        [stateGameField]
    );

    useEffect(() => {
        if (!newWinner) {
            return;
        }
        console.log('winner :', newWinner);
        addWinner(newWinner);
    }, [newWinner]);

    return <>
        {!winner && <div>
            <div className='currentStep'>current step : {currentStep} </div>
            <div className='wrapper'>
                <Square value={stateGameField[0]} id={0}/>
                <Square value={stateGameField[1]} id={1}/>
                <Square value={stateGameField[2]} id={2}/>

                <Square value={stateGameField[3]} id={3}/>
                <Square value={stateGameField[4]} id={4}/>
                <Square value={stateGameField[5]} id={5}/>

                <Square value={stateGameField[6]} id={6}/>
                <Square value={stateGameField[7]} id={7}/>
                <Square value={stateGameField[8]} id={8}/>
            </div>
        </div>}
        {winner && <WinnerWindow/>}
    </>
}

const mapDispatchToProps = {
    addWinner,
}

const mapStateToProps = state => {
    return {
        stateGameField: state.stateGameField,
        currentStep: state.currentStep,
        winner: state.winner
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);