import React from 'react';
import styles from "../app.module.scss";

const Count = ({count}) => {
    return (
        <div className={styles.count}>
            {count}
        </div>
    );
};

export default Count;