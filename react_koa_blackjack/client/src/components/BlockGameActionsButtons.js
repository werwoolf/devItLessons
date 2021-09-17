import React from 'react';
import axios from "axios";

const BlockGameActionsButtons = () => {
    async function getCard(){
     let  game = (await axios.get('/getcard')).data
        console.log(game)
    }
    return (
        <div>
            <button onClick={getCard}>get card</button>
        </div>
    );
};

export default BlockGameActionsButtons;