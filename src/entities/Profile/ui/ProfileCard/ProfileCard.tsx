import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { TextAlign, TextTheme, Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';

import { Currency, CurrencySelect } from '@/entities/Currency';
import type { Country } from '@/entities/Country';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
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
            <HStack
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
                justify="center"
                max
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
                justify="center"
                max
            >
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    theme={TextTheme.ERROR}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const PROFILE_INPUT: Array<{
        id: number;
        value: string | number | undefined;
        placeholder: string;
        onChange?: (value: string | Currency | Country) => void;
        'data-testid'?: string;
    }> = [
        {
            id: 1,
            value: data?.firstname,
            placeholder: t('Ваше имя'),
            onChange: onChangeFirstname,
            'data-testid': 'ProfileCard.Firstname',
        },
        {
            id: 2,
            value: data?.lastname,
            placeholder: t('Ваша фамилия'),
            onChange: onChangeLastname,
            'data-testid': 'ProfileCard.Lastname',
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
        <VStack
            className={classNames(cls.ProfileCard, mods, [className])}
            gap="8"
            max
        >
            {data?.age && (
                <HStack className={cls.avatarWrapper} justify="center" max>
                    <Avatar src={data.avatar} />
                </HStack>
            )}

            {PROFILE_INPUT.map((data) => {
                const { id, onChange, placeholder, value } = data;

                return (
                    <Input
                        key={id}
                        onChange={onChange}
                        placeholder={placeholder}
                        value={value}
                        className={cls.input}
                        readonly={readonly}
                        data-testid={data['data-testid']}
                    />
                );
            })}

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
        </VStack>
    );
};

export default ProfileCard;
