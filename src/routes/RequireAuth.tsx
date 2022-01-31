import { Navigate } from 'react-router-dom';
import { authSelector } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const isLogin = useSelector(authSelector);
    const auth = localStorage.getItem('auth');

    if (!auth) {
        return isLogin? children : <Navigate to="/" />;
    }
    return children;
};
