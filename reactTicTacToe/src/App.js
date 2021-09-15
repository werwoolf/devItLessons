import React from "react";
import Square from "./compoonents/Square.js";
import './styles.scss'
import {connect} from "react-redux";

const App = ({stateGameField}) => {

    return (
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
    );
};

const mapStateToProps = stateGameField => stateGameField;

export default connect(mapStateToProps)(App);