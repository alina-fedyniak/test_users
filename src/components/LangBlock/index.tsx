import { LOCALES } from '../../lang';
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setLocale } from '../../redux/locale/actions';
import { ReactComponent as Rus } from '../../assets/images/ru.svg';
import { ReactComponent as Eng } from '../../assets/images/gb.svg';
import styles from './LangBlock.module.scss';
//import { langSelector } from '../../redux/locale/selectors';
//import { useSelector } from 'react-redux';

export function LangBlock(): JSX.Element {
    const dispatch = useDispatch();
    //const lang = useSelector(langSelector);

    const localeSet = (event: any) => {
        const lang = event.target.dataset.lang;
        dispatch(setLocale(lang));
    };
    /*const localeSet = (lang: string) => {
        dispatch(setLocale(lang));
    };*/

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
                lang={LOCALES.ENGLISH}
                onClick={localeSet}
            >
                <Eng width={24} />
            </button>
            <button
                type="button"
                className={styles.langBlock__langBtn}
                lang={LOCALES.RUSSIAN}
                onClick={localeSet}
            >
                <Rus width={24} />
            </button>
        </>
    );
}
