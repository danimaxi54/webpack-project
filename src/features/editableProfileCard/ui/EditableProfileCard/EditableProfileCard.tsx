import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TextTheme, Text } from '@/shared/ui/deprecated/Text';
import { ProfileCard } from '@/entities/Profile';
import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/redesigned/Stack';
import EditableProfileCardHeader from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { ValidateProfileError } from '../../model/consts/consts';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при создании'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Имя и фамилия обязательны',
        ),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    };

    const onChangeFirstname = (value: string) => {
        dispatch(profileActions.updateProfile({ firstname: value }));
    };

    const onChangeLastname = (value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    };

    const onChangeAge = (value: string) => {
        const isNumberAge = /^\d+$/.test(value);

        dispatch(
            profileActions.updateProfile({
                age: isNumberAge ? Number(value) : 0,
            }),
        );
    };

    const onChangeCity = (value: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    };

    const onChangeAvatar = (value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    };

    const onChangeUsername = (value: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    };

    const onChangeCountry = (value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    };

    const onChangeCurrency = (value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    };

    useInitialEffect(() => id && dispatch(fetchProfileData(id)));

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack className={classNames('', {}, [className])} gap="8" max>
                <EditableProfileCardHeader />

                {validateErrors?.length &&
                    validateErrors.map((error) => (
                        <Text
                            key={error}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslate[error]}
                            data-testid="EditableProfileCard.Error"
                        />
                    ))}

                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    readonly={readonly}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCountry={onChangeCountry}
                    onChangeCurrency={onChangeCurrency}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
