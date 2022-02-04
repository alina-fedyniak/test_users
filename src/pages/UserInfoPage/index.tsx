import { useParams } from 'react-router-dom';
import { UserInfo } from '../../components/UserInfo';
import { User as UserType } from '../../interfaces';
import styles from '../UserInfoPage/UserInfoPage.module.scss';
import { Translate } from '../../lang';
import { usersSelector } from '../../redux/users/selectors';
import { useSelector } from 'react-redux';

export function UserInfoPage(): JSX.Element {
    const { uuid } = useParams();
    const usersData = useSelector(usersSelector);

    const user = usersData.find(item => {
        if (item.login.uuid === uuid) {
            return true;
        }
    });

    return user ? (
        <UserInfo user={user as UserType} />
    ) : (
        <div className={styles.userInfoPage}>{Translate('userNotFound')}</div>
    );
}
