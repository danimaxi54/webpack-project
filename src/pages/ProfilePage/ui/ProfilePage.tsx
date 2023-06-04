import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import ProfilePageHeader from '../ui/ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    const {
        className,
    } = props;

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

    useEffect(() => {
        dispatch(fetchProfileData());
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />

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
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
