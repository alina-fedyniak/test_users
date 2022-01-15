import styles from './HomePage.module.scss';
import {LogIn} from "../../components/Forms/LogInForm";

function HomePage (): JSX.Element {
    return (
        <div className={styles.homePage}>
            <LogIn />
        </div>
    );
}

export default HomePage;
