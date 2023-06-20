import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import Page from 'shared/ui/Page/Page';
import ProfilePageHeader from '../ui/ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { t } = useTranslation('profile');

    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useInitialEffect(() => id && dispatch(fetchProfileData(id)));

    const {
        className,
    } = props;

    const validateErrorTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при создании'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
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

        dispatch(profileActions.updateProfile({ age: isNumberAge ? Number(value) : 0 }));
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

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <ProfilePageHeader />

                {validateErrors?.length && validateErrors.map((error) => (
                    <Text
                        key={error}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslate[error]}
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
            </Page>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
