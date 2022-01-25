import { useLocation } from 'react-router-dom';
import { UserInfo } from '../../components/UserInfo';
import { User as UserType } from '../../interfaces';
import styles from '../UserInfoPage/UserInfoPage.module.scss';
import { NavBar } from '../../components/NavBar';

export function UserInfoPage(): JSX.Element {
    const { state } = useLocation();
    const stateUser = state as UserType;

    return (
        <>
            <NavBar />
            {stateUser ? (
                <UserInfo user={state as UserType} />
            ) : (
                <div className={styles.userInfoPage}>
                    Выберите пользователя чтобы увидеть его инфо
                </div>
            )}
        </>
    );
}
