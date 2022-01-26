import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { I18nProvider } from './lang';
import { UserInfoPage } from './pages/UserInfoPage';
import HomePage from './pages/HomePage';
import { LogOut } from './components/LogOut';
import { Spinner } from './components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { langSelector } from './redux/locale/selectors';
import { setLocale } from './redux/locale/actions';
import { RequireAuth } from './PrivateRoute/RequireAuth';

const UsersPage = lazy(() => import('./pages/UsersPage'));

function App(): JSX.Element {
    const dispatch = useDispatch();
    const locale = useSelector(langSelector);

    useEffect(() => {
        const lang = localStorage.getItem('locale');

        if (lang) {
            dispatch(setLocale(lang));
        }
    }, [dispatch]);

    return (
        <I18nProvider locale={locale}>
            <Header />
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/users-page"
                        element={
                            <RequireAuth>
                                <UsersPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/user-info"
                        element={
                            <RequireAuth>
                                <UserInfoPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/log-out"
                        element={
                            <RequireAuth>
                                <LogOut />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </Suspense>
        </I18nProvider>
    );
}

export default App;
