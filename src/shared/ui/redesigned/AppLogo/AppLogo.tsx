import React, { FC } from 'react';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo: FC<AppLogoProps> = (props) => {
    const { className, size = 50 } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />

            <div className={cls.gradientSmall} />

            <AppSvg
                className={cls.appLogo}
                width={size}
                height={size}
                color="black"
            />
        </HStack>
    );
};
