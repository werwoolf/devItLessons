import React from 'react';
import Card from "./Card.js";
import '../styles.scss';
import {connect} from "react-redux";
import {deleteGamesList} from "../store/actions.js";


const ListHistoryItem = ({game, deleteGamesList}) => {
    const winnersIdArray = game.winner.map(winner => winner.id);

    return (
        <div className='listHistoryItem' onClick={deleteGamesList}>

            {game.players.map((player, index) => {
                    let winner = null;
                    if (winnersIdArray.indexOf(player.id) !== -1) {
                        winner = 'winner';
                    }

                    return <div key={index} className={winner || 'player'}>
                        <div className='playerName'>{player.name}</div>

                        {player.cards.map((card, index) =>
                            <Card size={'cardLittle'} card={card} key={index}/>)}

                    </div>
                }
            )
            }
        </div>
    );
};

const mapDispatchToProps = {deleteGamesList};

export default connect(null, mapDispatchToProps)(ListHistoryItem);