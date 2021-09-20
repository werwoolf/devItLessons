import React, {useState} from 'react';
import {connect} from "react-redux";
import {startGame} from "../store/actions";
import {createStructuredSelector} from "reselect";
import {message} from "../store/selectors";

const AddPlayersForm = ({startGame}) => {
    const [players, setPlayers] = useState(['', '', '', '']);

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

            <button onClick={() => startGame(players)}>Start game</button>
        </div>
    );
};

const mapDispatchToProps = {startGame};
const mapStateToProps = createStructuredSelector({message})

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayersForm);