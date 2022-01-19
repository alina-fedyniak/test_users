import styles from './HomePage.module.scss';
import { LogIn } from '../../components/LogIn';
import { NavLink } from 'react-router-dom';

function HomePage (): JSX.Element {
    return (
        <div className={styles.homePage}>
            <NavLink to="/users-page">
                <LogIn />
            </NavLink>
        </div>
    );
}

export default HomePage;
