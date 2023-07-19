import React, { FC } from 'react';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
}

export const AppLogo: FC<AppLogoProps> = (props) => {
    const { className } = props;
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />

            <div className={cls.gradientSmall} />

            <AppSvg className={cls.appLogo} />
        </HStack>
    );
};
