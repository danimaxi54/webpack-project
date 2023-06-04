import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Text from 'shared/ui/Text/Text';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileisLoading } from '../../model/selectors/getProfileIsLoading/getProfileisLoading';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation();

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileisLoading);

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />

                <Button className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>

            <div className={cls.data}>
                <Input
                    className={cls.input}
                    value={data?.firstname}
                    placeholder={t('Ваше имя')}
                />

                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Ваше фамилия')}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
