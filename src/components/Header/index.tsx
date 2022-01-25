import { Container } from '../Container';
import { LOCALES } from '../../lang';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLocale } from '../../redux/locale/actions';
import { ReactComponent as Rus } from '../../assets/images/ru.svg';
import { ReactComponent as Eng } from '../../assets/images/gb.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import styles from './Header.module.scss';

export function Header(): JSX.Element {
    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <NavLink to="/">
                        <Logo className={styles.header__logo} />
                    </NavLink>
                    <div className={styles.header__infoWrapper}>
                        <div className={styles.header__langBox}>
                            <button
                                type="button"
                                className={styles.header__langBtn}
                                onClick={() =>
                                    dispatch(setLocale(LOCALES.ENGLISH))
                                }
                            >
                                <Eng width={24} />
                            </button>
                            <button
                                type="button"
                                className={styles.header__langBtn}
                                onClick={() =>
                                    dispatch(setLocale(LOCALES.RUSSIAN))
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
