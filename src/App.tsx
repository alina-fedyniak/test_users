import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { I18nProvider, LOCALES } from './lang';
import { Provider } from 'react-redux';
import store from './redux/store';
import { UserInfoPage } from './pages/UserInfoPage';
import HomePage from "./pages/HomePage";
import { LogOut } from "./components/LogOut";
import { Spinner } from "./components/Spinner";

const UsersPage = lazy(() => import('./pages/UsersPage'));

function App(): JSX.Element {
    const [locale, setLocale] = useState(LOCALES.ENGLISH);

    useEffect(() => {
        const lang = localStorage.getItem('locale');

        if (lang) {
            setLocale(lang);
        }
    }, []);

    const changeLanguage = (language: string) => {
        setLocale(language);
        localStorage.setItem('locale', language);
    };

    return (
        <I18nProvider locale={locale}>
            <Provider store={store}>
            <Header onChangeLanguage={changeLanguage} />
            <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users-page" element={<UsersPage />} />
                <Route path="/user-info" element={<UserInfoPage />} />
                <Route path="/log-out" element={<LogOut />} />
            </Routes>
            </Suspense>
            </Provider>
        </I18nProvider>
    );
}

export default App;
