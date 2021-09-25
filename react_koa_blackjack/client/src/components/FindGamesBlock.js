import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {listClientGames} from "../store/selectors";
import {findGames} from "../store/actions";

const FindGamesBlock = ({listClientGames, findGames}) => {

    return (
        <div className='findGamesBlock'>
            <button onClick={() => findGames()}>Find my games</button>
            {listClientGames && <div>{listClientGames}</div>}
        </div>
    );
};


const mapStateToProps = createStructuredSelector({listClientGames})
const mapDispatchToProps = {findGames}

export default connect(mapStateToProps, mapDispatchToProps)(FindGamesBlock);