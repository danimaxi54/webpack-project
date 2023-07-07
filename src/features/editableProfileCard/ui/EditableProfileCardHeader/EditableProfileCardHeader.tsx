import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Text from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import {
    getProfileData,
} from '../../model/selectors/getProfileData/getProfileData';
import {
    getProfileReadonly,
} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import HStack from '../../../../shared/ui/Stack/HStack/HStack';

interface EditableProfileCardHeaderProps {
    className?: string;
}

const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (props) => {
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
        <HStack
            className={classNames('', {}, [className])}
            justify="between"
            max
        >
            <Text title={t('Профиль')} />

            {isEditable && (
                <>
                    {readonly
                        ? (
                            <Button
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <HStack gap="8">
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCanselEdit}
                                >
                                    {t('Отменить')}
                                </Button>

                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                </>
            )}

        </HStack>
    );
};

export default EditableProfileCardHeader;
