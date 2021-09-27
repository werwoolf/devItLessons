import React, {useCallback} from 'react';
import '../styles.scss'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {loading} from "../store/selectors.js";

const PlayerListItem = ({player, handleDeletePlayer, index, loading}) => {
    const onClick = useCallback(
        () => handleDeletePlayer(index),
        [handleDeletePlayer, index]
    );

    return (
        <div className='playerListItem'>
            <button disabled={loading} onClick={onClick} className='deletePlayerButton'> X
            </button>
            <div>{player}</div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({loading});

export default connect(mapStateToProps)(PlayerListItem);