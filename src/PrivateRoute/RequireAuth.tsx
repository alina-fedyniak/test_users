import { Navigate } from 'react-router-dom';
import { isLoginSelector} from '../redux/users/selectors';
import { useSelector } from 'react-redux';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const isLogin = useSelector(isLoginSelector);

    if (!isLogin) {
        return <Navigate to="/" />
    }
    return children;
};
