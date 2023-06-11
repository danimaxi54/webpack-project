import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const { t } = useTranslation('profile');

    const {
        className,
    } = props;

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const isEditable = authData?.id === profileData?.id;

    const onEdit = () => {
        dispatch(profileActions.setReadonly(false));
    };

    const onCanselEdit = () => {
        dispatch(profileActions.canselEdit());
    };

    const onSave = () => {
        dispatch(updateProfileData());
    };

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />

            {isEditable && (
                <div className={cls.btnsWrapper}>
                    {readonly
                        ? (
                            <Button
                                className={cls.editBtn}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    className={cls.editBtn}
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCanselEdit}
                                >
                                    {t('Отменить')}
                                </Button>

                                <Button
                                    className={cls.saveBtn}
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}

                </div>
            )}

        </div>
    );
};

export default ProfilePageHeader;
