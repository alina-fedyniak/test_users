import { Container } from '../Container';
import { LOCALES } from '../../lang';
import { ReactComponent as Rus } from '../../assets/images/ru.svg';
import { ReactComponent as Eng } from '../../assets/images/gb.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { NavBar } from '../NavBar';

interface IProps {
    onChangeLanguage: (language: string) => void;
}

export function Header({ onChangeLanguage }: IProps): JSX.Element {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <NavLink to="/">
                        <Logo />
                    </NavLink>
                    <NavBar />
                    <div className={styles.header__infoWrapper}>
                        <div className={styles.header__langBox}>
                            <button
                                type="button"
                                className={styles.header__langBtn}
                                onClick={() =>
                                    onChangeLanguage(LOCALES.ENGLISH)
                                }
                            >
                                <Eng width={24} />
                            </button>
                            <button
                                type="button"
                                className={styles.header__langBtn}
                                onClick={() =>
                                    onChangeLanguage(LOCALES.RUSSIAN)
                                }
                            >
                                <Rus width={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}
