import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardRedesigned.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Card } from '@/shared/ui/redesigned/Card';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedSkeleton = () => (
    <Card padding="24" max>
        <VStack gap="32">
            <HStack max justify="center">
                <Skeleton border="100%" width={128} height={128} />
            </HStack>

            <HStack gap="32" max>
                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />

                    <Skeleton width="100%" height={38} />

                    <Skeleton width="100%" height={38} />

                    <Skeleton width="100%" height={38} />
                </VStack>

                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />

                    <Skeleton width="100%" height={38} />

                    <Skeleton width="100%" height={38} />

                    <Skeleton width="100%" height={38} />
                </VStack>
            </HStack>
        </VStack>
    </Card>
);

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile');

    return (
        <HStack
            className={classNames('', {}, [cls.error])}
            justify="center"
            max
        >
            <Text
                title={t('Произошла ошибка при загрузке профиля')}
                variant="error"
                text={t('Попробуйте обновить страницу')}
                align="center"
            />
        </HStack>
    );
};

const ProfileCardRedesigned: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation();

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

    return (
        <Card max padding="24">
            <VStack gap="32">
                {data?.avatar && (
                    <HStack justify="center" max>
                        <Avatar size={128} src={data.avatar} />
                    </HStack>
                )}

                <HStack gap="24" max>
                    <VStack gap="16" max>
                        <Input
                            onChange={onChangeFirstname}
                            label={t('Имя')}
                            value={data?.firstname}
                            readonly={readonly}
                            data-testid="ProfileCard.Firstname"
                        />

                        <Input
                            onChange={onChangeLastname}
                            label={t('Фамилия')}
                            value={data?.lastname}
                            readonly={readonly}
                            data-testid="ProfileCard.Lastname"
                        />

                        <Input
                            onChange={onChangeAge}
                            label={t('Возраст')}
                            value={data?.age}
                            readonly={readonly}
                        />

                        <Input
                            onChange={onChangeCity}
                            label={t('Город')}
                            value={data?.city}
                            readonly={readonly}
                        />
                    </VStack>

                    <VStack gap="16" max>
                        <Input
                            onChange={onChangeUsername}
                            label={t('Имя пользователя')}
                            value={data?.username}
                            readonly={readonly}
                        />

                        <Input
                            onChange={onChangeAvatar}
                            label={t('Введите ссылку на аватар')}
                            value={data?.avatar}
                            readonly={readonly}
                        />

                        <CurrencySelect
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                        />

                        <CountrySelect
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};

export default ProfileCardRedesigned;
