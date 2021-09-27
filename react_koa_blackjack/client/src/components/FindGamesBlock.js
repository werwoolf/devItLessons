import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {listClientGames} from "../store/selectors";
import {findGames} from "../store/actions";

import '../styles.scss';

const FindGamesBlock = ({findGames}) => (
    <div className='findGamesBlock'>
        <button onClick={findGames}>Find my games</button>
    </div>
);

const mapStateToProps = createStructuredSelector({listClientGames});
const mapDispatchToProps = {findGames};

export default connect(mapStateToProps, mapDispatchToProps)(FindGamesBlock);