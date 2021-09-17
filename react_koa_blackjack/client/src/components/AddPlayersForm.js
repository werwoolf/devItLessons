import React, {useState} from 'react';
import axios from "axios";

const AddPlayersForm = () => {
    const [players, setPlayers] = useState(['', '', '', '']);

    async function startGame() {
        const response = (await axios.post('http://localhost:3000', players)).config.data;

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

            <button onClick={startGame}>Start game</button>
        </div>
    );
};

export default AddPlayersForm;