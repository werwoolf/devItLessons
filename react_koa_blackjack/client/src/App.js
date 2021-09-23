import React, {useEffect} from "react";
import SideBlock from "./components/SideBlock";
import Footer from "./components/Footer";
import GameField from "./components/GameField";
import {connect} from "react-redux";
import {authorization, game, loading} from "./store/selectors.js";
import {createStructuredSelector} from "reselect";
import {setGame} from './store/actions.js';
import Loader from "./components/Loader.js";

const App = ({setGame, loading, authorization}) => {
    useEffect(() => {
        if (!authorization) {
            return;
        }

        setGame();
    }, [authorization])

    return (
        <div className='container'>
            {loading && <Loader/>}
            <GameField/>
            <Footer/>
            <SideBlock/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({game, loading, authorization})
const mapDispatchToProps = ({setGame})
export default connect(mapStateToProps, mapDispatchToProps)(App);