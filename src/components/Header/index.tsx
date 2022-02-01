import { Container } from '../Container';
import { NavLink } from 'react-router-dom';
import { NavBar } from '../NavBar';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import styles from './Header.module.scss';
import { LangBlock } from '../LangBlock';

export function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <NavLink to="/">
                        <Logo className={styles.header__logo} />
                    </NavLink>
                    <div className={styles.header__infoWrapper}>
                        <div className={styles.header__langBox}>
                            <LangBlock />
                        </div>
                    </div>
                </div>
            </Container>
            <NavBar />
        </header>
    );
}
