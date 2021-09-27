import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {activePlayer, message} from "../store/selectors";


const Footer = ({activePlayer, message}) => {
    return (
        <div className='footer'>

            {activePlayer && <div><h2>Now Step : </h2><h1>{activePlayer.name}</h1></div>}
            {message && <h1>{message}</h1>}

        </div>
    );
};


const mapStateToProps = createStructuredSelector({activePlayer, message});

export default connect(mapStateToProps)(Footer);