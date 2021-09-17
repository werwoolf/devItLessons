import React, {useState} from 'react';
import axios from "axios";

const AddPlayersForm = () => {
    const [players, setPlayers] = useState(['', '', '', '']);

    async function startGame(players) {
        players = players.filter(player => player)
        const response = (await axios.post('http://localhost:3000', players)).data;
        console.log(response)
    }
    
    return (
        <div>
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

export default AddPlayersForm;