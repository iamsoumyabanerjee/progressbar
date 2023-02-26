import React from 'react';
import styles from './ProgressBar.module.scss';

interface IProgressBar {
    value: string;
    testId: string;
}
const ProgressBar = ({ value, testId }: IProgressBar): JSX.Element => (
    <div className={styles.progressBar}>
        <span data-testid={testId} className={styles.value}>{`${value}%`}</span>
        <span
            className={
                parseInt(value) >= 100
                    ? `${styles.fullWidth} ${styles.bar}`
                    : styles.bar
            }
            style={{ width: `${value}%` }}
        />
    </div>
);

export default ProgressBar;
