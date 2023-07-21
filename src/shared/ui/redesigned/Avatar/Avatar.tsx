import { CSSProperties, FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage/AppImage';
import { Icon } from '../Icon';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { Skeleton } from '../Skeleton/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const { className, src, size = 100, alt } = props;

    const styles: CSSProperties = {
        width: size,
        height: size,
    };

    const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;
    const fallback = <Skeleton width={size} height={size} border="50%" />;

    return (
        <AppImage
            fallback={fallback}
            src={src}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt}
            errorFallback={errorFallback}
        />
    );
};
