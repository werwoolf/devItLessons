import React, {useCallback, useState} from 'react';
import {connect} from "react-redux";
import {startGame} from "../store/actions";

const AddPlayersForm = ({startGame}) => {
    let [players, setPlayers] = useState(['', '', '', '']);

    const handleStartClick = useCallback(() => {
        players = players.filter(player => player);
        startGame(players);
    }, [players]);

    return (
        <div className='AddPlayersForm'>
            {players.map((player, index) => <input
                    onChange={e => setPlayers(prevState => {
                        const newArr = [...prevState];
                        newArr[index] = e.target.value;
                        return newArr;
                    })}
                    key={index}
                />
            )}

            <button onClick={handleStartClick}>Start game</button>
        </div>
    );
};

const mapDispatchToProps = {startGame};

export default connect(null, mapDispatchToProps)(AddPlayersForm);