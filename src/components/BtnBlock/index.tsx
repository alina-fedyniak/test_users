import { LOCALES } from '../../lang';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLocale } from '../../redux/locale/actions';
import { ReactComponent as Rus } from '../../assets/images/ru.svg';
import { ReactComponent as Eng } from '../../assets/images/gb.svg';
import styles from './BtnBlock.module.scss';

export function BtnBlock(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        const lang = localStorage.getItem('locale');

        if (lang) {
            dispatch(setLocale(lang));
        }
    }, [dispatch]);

    return (
        <>
            <button
                type="button"
                className={styles.btnBlock__langBtn}
                onClick={() => dispatch(setLocale(LOCALES.ENGLISH))}
            >
                <Eng width={24} />
            </button>
            <button
                type="button"
                className={styles.header__langBtn}
                onClick={() => dispatch(setLocale(LOCALES.RUSSIAN))}
            >
                <Rus width={24} />
            </button>
        </>
    );
}
