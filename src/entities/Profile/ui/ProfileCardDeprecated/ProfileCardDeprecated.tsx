import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedLoader = () => (
    <HStack
        className={classNames(cls.ProfileCard, {}, [cls.loading])}
        justify="center"
        max
    >
        <LoaderDeprecated />
    </HStack>
);

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');

    return (
        <HStack
            className={classNames('', {}, [cls.error])}
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
};

const ProfileCardDeprecated: FC<ProfileCardProps> = (props) => {
    const {
        data,
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

    const PROFILE_INPUT_DEPRECATED: Array<{
        id: number;
        value: string | number | undefined;
        placeholder: string;
        onChange?: (value: string | Currency | Country) => void;
        'data-testid'?: string;
    }> = [
        {
            id: 1,
            value: data?.firstname,
            placeholder: t('Имя'),
            onChange: onChangeFirstname,
            'data-testid': 'ProfileCard.Firstname',
        },
        {
            id: 2,
            value: data?.lastname,
            placeholder: t('Фамилия'),
            onChange: onChangeLastname,
            'data-testid': 'ProfileCard.Lastname',
        },
        {
            id: 3,
            value: data?.age,
            placeholder: t('Возраст'),
            onChange: onChangeAge,
        },
        {
            id: 4,
            value: data?.city,
            placeholder: t('Город'),
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
        <VStack className={classNames(cls.ProfileCard, mods, [])} gap="8" max>
            {data?.avatar && (
                <HStack className={cls.avatarWrapper} justify="center" max>
                    <AvatarDeprecated src={data.avatar} />
                </HStack>
            )}

            {PROFILE_INPUT_DEPRECATED.map((data) => {
                const { id, onChange, placeholder, value } = data;

                return (
                    <InputDeprecated
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

export default ProfileCardDeprecated;
