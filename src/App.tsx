import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { I18nProvider, LOCALES } from './lang';
import { Provider } from 'react-redux';
import store from './redux/store';
import  UsersPage  from './pages/UsersPage';
import { UserInfo } from './components/UserInfo';
import HomePage from "./pages/HomePage";

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
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users-page" element={<UsersPage />} />
                    <Route path="/userInfo" element={<UserInfo />} />
                    <Route path="/logOut" element={<HomePage />} />
                </Routes>
            </Provider>
        </I18nProvider>
    );
}

export default App;
