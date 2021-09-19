import React, {useState} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setGame, addMessage} from "../store/actions";
import {createStructuredSelector} from "reselect";
import {message} from "../store/selectors";

const AddPlayersForm = ({setGame, addMessage}) => {
    const [players, setPlayers] = useState(['', '', '', '']);

    async function startGame(players) {
        try {
            players = players.filter(player => player)
            const game = (await axios.post('http://localhost:3000/start', players)).data;
            if (typeof game === 'string') {
                throw game
            }
            setGame(game)
        } catch (e) {
            addMessage(e)
        }
    }

    return (
        <div className='AddPlayersForm'>
            <input onChange={(e) => {
                setPlayers(prev => [e.target.value, prev[1], prev[2], prev[3]])
            }
            }/><br/>
            <input onChange={(e) => {
                setPlayers(prev => [prev[0], e.target.value, prev[2], prev[3]])
            }}/><br/>

            <input onChange={(e) => {
                setPlayers(prev => [prev[0], prev[1], e.target.value, prev[3]])
            }}/><br/>

            <input onChange={(e) => {
                setPlayers(prev => [prev[0], prev[1], prev[2], e.target.value])
            }}/><br/>

            <button onClick={() => startGame(players)}>Start game</button>
        </div>
    );
};

const mapDispatchToProps = {setGame, addMessage};
const mapStateToProps = createStructuredSelector({message})

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayersForm);