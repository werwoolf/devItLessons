import React, {useCallback, useState} from 'react';
import styles from "../app.module.scss";
import Count from "./Count.mjs";
import Button from "./Button.mjs";
import Test from "./Test.js";

const IncreaseDecrease = () => {
    let [state, setState] = useState(0);

    const increment = useCallback(
        () => {
            setState((state) => state + 1);
        }, []
    );

    const decrement = useCallback(
        () => {
            setState((state) => state - 1);
        }, []
    );

    return (
        <div className={styles.container}>
            <Test onClick={decrement}/>
            <Count count={state}/>
            <Button className={styles.increment} onClick={increment}>
                Increment
            </Button>
            <Button className={styles.decrement} onClick={decrement}>
                Decrement
            </Button>
        </div>
    );
};

export default IncreaseDecrease;