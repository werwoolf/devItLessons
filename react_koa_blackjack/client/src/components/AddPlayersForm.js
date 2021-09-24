import React, {useCallback, useEffect, useState} from 'react';
import {connect} from "react-redux";
import {addMessage, startGame} from "../store/actions";
import PlayerListItem from "./PlayerListItem.js";
import {createStructuredSelector} from "reselect";
import {loading} from "../store/selectors.js";

const AddPlayersForm = ({startGame, addMessage, loading}) => {

    let [player, setPlayer] = useState('')
    let [players, setPlayers] = useState([]);

    const handleStartClick = useCallback(() => {
        players = players.filter(player => player);
        startGame(players);

    }, [players]);

    const handleAddPlayer = () => {
        addMessage('')
        setPlayers(prevState => {
            const newState = [...prevState]
            newState.push(player)
            setPlayer('')
            return newState
        })
    }

    useEffect(() => {
        player.length > 0 && player.length < 3 ?
        addMessage('Player name must by minimum 3 chars'):
        addMessage('')
    }, [player])


    const handleDeletePlayer = (playerIndex) => {
        setPlayers(prevState => {

            const newState = [...prevState]
            newState.splice(playerIndex, 1)
            return newState
        })
    }

    return (
        <div className='AddPlayersForm'>
            <button disabled={loading} onClick={handleStartClick}>Start game</button>
            {players.length < 4 && player.length > 2 &&
            <button disabled={loading} onClick={handleAddPlayer}>Add player</button>}
            {players.length < 4 && <input
                onChange={e => setPlayer(e.target.value)}
                value={player}
            />}
            {players.map((player, index) => {
                return <PlayerListItem
                    player={player}
                    handleDeletePlayer={handleDeletePlayer}
                    index={index}
                    key={index}/>
            })}


        </div>
    );
};

const mapDispatchToProps = {startGame, addMessage};
const mapStateToProps = createStructuredSelector({loading})

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayersForm);