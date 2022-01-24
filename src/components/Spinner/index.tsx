import { BallTriangle } from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export function Spinner(): JSX.Element {
    return (
        <div className={styles.spinner_backdrop}>
            <BallTriangle color="grey" height={100} width={100} ariaLabel="loading-indicator" />
        </div>
    );
}
