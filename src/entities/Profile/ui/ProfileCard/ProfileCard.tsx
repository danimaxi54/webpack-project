import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import Avatar from 'shared/ui/Avatar/Avatar';

import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (value: Country) => void;
    readonly?: boolean;
}

const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        error,
        isLoading,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
        readonly,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    theme={TextTheme.ERROR}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const PROFILE_INPUT: Array<{
            id: number;
            value: string | number | undefined;
            placeholder: string;
            onChange?: (value: string | Currency | Country) => void
        }> = [
            {
                id: 1,
                value: data?.firstname,
                placeholder: t('Ваше имя'),
                onChange: onChangeFirstname,
            },
            {
                id: 2,
                value: data?.lastname,
                placeholder: t('Ваше фамилия'),
                onChange: onChangeLastname,
            },
            {
                id: 3,
                value: data?.age,
                placeholder: t('Ваш возраст'),
                onChange: onChangeAge,
            },
            {
                id: 4,
                value: data?.city,
                placeholder: t('Ваш город'),
                onChange: onChangeCity,
            },
            {
                id: 5,
                value: data?.username,
                placeholder: t('Имя пользователя'),
                onChange: onChangeUsername,
            },
            {
                id: 6,
                value: data?.avatar,
                placeholder: t('Введите ссылку на аватар'),
                onChange: onChangeAvatar,
            },
        ];

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.header} />

            <div className={cls.data}>
                {data?.age && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                ) }

                {PROFILE_INPUT.map(((data) => {
                    const {
                        id, onChange, placeholder, value,
                    } = data;

                    return (
                        <Input
                            key={id}
                            onChange={onChange}
                            placeholder={placeholder}
                            value={value}
                            className={cls.input}
                            readonly={readonly}
                        />
                    );
                }))}

                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                    className={cls.input}
                />

                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                    className={cls.input}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
