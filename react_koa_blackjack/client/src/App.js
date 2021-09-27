import React, {useEffect} from "react";
import SideBlock from "./components/SideBlock";
import Footer from "./components/Footer";
import GameField from "./components/GameField";
import {connect} from "react-redux";
import {authorization, game, loading, winner, players, listClientGames} from "./store/selectors.js";
import {createStructuredSelector} from "reselect";
import {setGame} from './store/actions.js';
import Loader from "./components/Loader.js";
import ListHistoryItem from "./components/ListHistoryItem.js";

const App = ({setGame, loading, authorization, listClientGames}) => {
    useEffect(() => {
        if (!authorization) {
            return;
        }
        setGame();
    }, [authorization]);

    return (
        <div className='container'>
            {loading && <Loader/>}
            <GameField/>
            <SideBlock/>
            <Footer/>
            {listClientGames && listClientGames.length &&
            <div className='listHistoryGames'>
                {listClientGames.map(
                    (gameInfo, index) => <ListHistoryItem key={index} game={gameInfo}/>
                )}
            </div>
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    game, loading, authorization, winner, players, listClientGames
});

const mapDispatchToProps = ({setGame});

export default connect(mapStateToProps, mapDispatchToProps)(App);