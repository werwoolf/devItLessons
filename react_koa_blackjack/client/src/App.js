import React, {useEffect} from "react";
import SideBlock from "./components/SideBlock";
import Footer from "./components/Footer";
import GameField from "./components/GameField";
import {connect} from "react-redux";
import {authorization, game, loading, winner, players} from "./store/selectors.js";
import {createStructuredSelector} from "reselect";
import {setGame, saveGame} from './store/actions.js';
import Loader from "./components/Loader.js";

const App = ({setGame, loading, authorization, saveGame, winner, players}) => {
    useEffect(() => {
        if (!authorization) {
            return;
        }
        setGame();
    }, [authorization]);


    useEffect(() => {
        if (!winner) {
            return;
        }
        const savedGame = {winner, players}

        saveGame(savedGame);
    }, [winner]);


    return (
        <div className='container'>
            {loading && <Loader/>}
            <GameField/>
            <SideBlock/>
            <Footer/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({game, loading, authorization, winner, players})
const mapDispatchToProps = ({setGame, saveGame})
export default connect(mapStateToProps, mapDispatchToProps)(App);