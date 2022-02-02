import { LOCALES } from '../../lang';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLocale } from '../../redux/locale/actions';
import { ReactComponent as Rus } from '../../assets/images/ru.svg';
import { ReactComponent as Eng } from '../../assets/images/gb.svg';
import styles from './LangBlock.module.scss';

export function LangBlock(): JSX.Element {
    const dispatch = useDispatch();

    const localeSet = (lang: string) => {
        dispatch(setLocale(lang));
    };

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
                className={styles.langBlock__langBtn}
                onClick={() => localeSet(LOCALES.ENGLISH)}
            >
                <Eng width={24} />
            </button>
            <button
                type="button"
                className={styles.langBlock__langBtn}
                onClick={() => localeSet(LOCALES.RUSSIAN)}
            >
                <Rus width={24} />
            </button>
        </>
    );
}
