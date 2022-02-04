import { useLocation } from 'react-router-dom';
import { UserInfo } from '../../components/UserInfo';
import { User as UserType } from '../../interfaces';
import styles from '../UserInfoPage/UserInfoPage.module.scss';
import { Translate } from '../../lang';

export function UserInfoPage(): JSX.Element {
    const location = useLocation();

    return location ? (
        <UserInfo user={location.state as UserType} />
    ) : (
        <div className={styles.userInfoPage}>
            {Translate('userNotFound')}
        </div>
    );
}
