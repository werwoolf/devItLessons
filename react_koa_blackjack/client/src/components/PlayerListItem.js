import React from 'react';
import '../styles.scss'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {loading} from "../store/selectors.js";

const PlayerListItem = ({player, handleDeletePlayer, index, loading}) => {
    return (
        <div className='playerListItem'>
            <button disabled={loading} onClick={() => handleDeletePlayer(index)} className='deletePlayerButton'> X</button>
            <div>{player}</div>

        </div>
    );
};

const mapStateToProps = createStructuredSelector({loading})

export default connect(mapStateToProps) (PlayerListItem);