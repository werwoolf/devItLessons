import React, {useCallback} from 'react';
import {add} from "../store/actions.js";
import {connect} from "react-redux";

const Square = ({value, id, add}) => {
    const click = useCallback(() => {
        if (value) {
            return;
        }

        add(id);
    }, [add, id, value])

    return (
        <button className='square' onClick={click}>
            {value}
        </button>
    );
};

const mapDispatchToProps = {add};

export default connect(null, mapDispatchToProps)(Square);

