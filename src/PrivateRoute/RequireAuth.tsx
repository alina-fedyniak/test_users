import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = localStorage.getItem('auth');

    if (!auth) {
        return <Navigate to="/" />
    }
    return children;
};
