import React, {useCallback} from 'react';
import {add} from "../store/actions.js";
import {connect} from "react-redux";

const Square = ({value, id, add}) => {

    const click = useCallback(()=>{
        if(value === ''){
            add(id)
        }
    },[value])

    return (
        <button className='square' onClick={click}>
            {value}
        </button>
    );
};




const mapDispatchToProps = dispatch => {
    return {
        add: (id) => dispatch(add(id)),
    }
};

const mapStateToProps = state => {
    return{
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);

