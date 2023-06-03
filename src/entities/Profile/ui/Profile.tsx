import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Profile.module.scss';

interface ProfileProps {
    className?: string;
}

const Profile: FC<ProfileProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Profile, {}, [className])} />
    );
};

export default Profile;
