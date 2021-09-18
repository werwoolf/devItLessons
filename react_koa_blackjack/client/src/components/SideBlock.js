import React from "react";
import AddPlayersForm from "./AddPlayersForm";
import BlockGameActionsButtons from "./BlockGameActionsButtons";

import '../styles.scss'

const SideBlock = () => {

    return (
        <div className='sideBlock'>
            <BlockGameActionsButtons/>
            <AddPlayersForm/>
        </div>
    );
};

export default SideBlock;