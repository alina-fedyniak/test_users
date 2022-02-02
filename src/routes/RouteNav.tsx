import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserInfoPage } from '../pages/UserInfoPage';
import HomePage from '../pages/HomePage';
import { LogOut } from '../components/LogOut';
import { Spinner } from '../components/Spinner';
import { RequireAuth } from '../routes/RequireAuth';

const UsersPage = lazy(() => import('../pages/UsersPage'));

export const RouteNav = (): JSX.Element => {
    return (
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
    );
};
