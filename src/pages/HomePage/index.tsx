import styles from './HomePage.module.scss';
import { LogIn } from '../../components/LogIn';
import { NavLink } from 'react-router-dom';

function HomePage (): JSX.Element {
    return (
        <div className={styles.homePage}>
            <NavLink className={styles.homePage__link} to="/users-page">
                <LogIn />
            </NavLink>
        </div>
    );
}

export default HomePage;
