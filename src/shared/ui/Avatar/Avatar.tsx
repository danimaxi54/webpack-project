import { CSSProperties, FC } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className,
        src,
        size,
        alt,
    } = props;

    const mods: Mods = {};

    const styles: CSSProperties = {
        width: size || 100,
        height: size || 100,
    };

    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
        />
    );
};
