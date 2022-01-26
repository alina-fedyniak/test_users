import { Navigate } from 'react-router-dom';
import { authSelector} from '../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const isAuth = useSelector(authSelector);
    //const auth = localStorage.getItem('auth');

    if (!isAuth) {
        return <Navigate to="/" />
    }
    return children;
};
