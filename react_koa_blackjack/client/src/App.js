import React from 'react';
import SideBlock from "./components/SideBlock";
import Footer from "./components/Footer";
import GameField from "./components/GameField";

const App = () => {
    return (
        <div className='container'>
            <GameField/>
            <Footer/>
            <SideBlock/>
        </div>
    );
};

export default App;