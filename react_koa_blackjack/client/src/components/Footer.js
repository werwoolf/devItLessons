import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {activePlayer} from "../store/selectors";


const Footer = ({activePlayer}) => {
    return (
        <div className='footer'>
            {activePlayer && <div><h2>Now Step : </h2><h1>{activePlayer.name}</h1></div>}
        </div>
    );
};


const mapStateToProps = createStructuredSelector({activePlayer});

export default connect(mapStateToProps)(Footer);