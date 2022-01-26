import { Navigate } from 'react-router-dom';
import { authSelector} from '../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(authSelector);

    if (!auth) {
        return <Navigate to="/" />
    }
    return children;
};
