import { FC } from 'react';

import { Currency } from '@/entities/Currency';
import type { Country } from '@/entities/Country';

import { ToggleFeatures } from '@/shared/lib/features';
import { Profile } from '../..';
import ProfileCardDeprecated, {
    ProfileCardDeprecatedError,
    ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import ProfileCardRedesigned, {
    ProfileCardRedesignedError,
    ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
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
    const { isLoading, error } = props;

    if (isLoading) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ProfileCardRedesignedSkeleton />}
                off={<ProfileCardDeprecatedLoader />}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ProfileCardRedesignedError />}
                off={<ProfileCardDeprecatedError />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ProfileCardRedesigned {...props} />}
            off={<ProfileCardDeprecated {...props} />}
        />
    );
};

export default ProfileCard;
