import React from 'react';
import {add0, addX} from "../store/actions.js";
import {connect} from "react-redux";

const Square = ({value,id, add0, addX,stateGameField}) => {
    return (
        <button className='square' onClick={()=>add0(stateGameField,id)}>
            {value}
        </button>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        add0: (id) => dispatch(add0(id)),
        addX: (id) => dispatch(addX(id))
    }
};

export const mapStateToProps = stateGameField => stateGameField;
export default connect(mapStateToProps, mapDispatchToProps)(Square);

