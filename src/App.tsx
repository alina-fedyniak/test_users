import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import store from './redux/store';
import { Header } from './components/Header';
import { navConfig } from './utils/constants';
import { I18nProvider, LOCALES } from './lang';
import { NavBar } from './components/NavBar';
import { Users } from './components/Users';
import { LogOut } from './components/LogOut';
import { UserInfo } from './components/UserInfo';

function App(): JSX.Element {
    const [locale, setLocale] = useState(LOCALES.ENGLISH);
    //const { home, users, logOut, userInfo } = navConfig;

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
            <Header onChangeLanguage={changeLanguage} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavBar />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/userInfo" element={<UserInfo />} />
                    <Route path="/logOut" element={<LogOut />} />
                </Routes>
            </BrowserRouter>
        </I18nProvider>
    );
}

export default App;
