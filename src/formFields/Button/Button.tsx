import React from 'react';
import { debounce } from 'lodash';

import styles from './Button.module.scss';

interface IButtonProps {
    type: string;
    onClick: any;
    value: string | number;
}

const Button = (props: IButtonProps): JSX.Element => {
    const handleClick = debounce((event) => props.onClick(event), 10);

    return (
        <button className={styles.btn} onClick={handleClick}>
            {props.value}
        </button>
    );
};

export default Button;
