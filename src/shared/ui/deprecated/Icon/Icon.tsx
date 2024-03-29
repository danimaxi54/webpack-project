import React, { FC } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 * */
export const Icon: FC<IconProps> = (props) => {
    const { className, Svg, inverted, ...otherProps } = props;

    const mods: Mods = {
        [cls.Icon]: !inverted,
        [cls.inverted]: inverted,
    };

    return (
        <Svg className={classNames('', mods, [className])} {...otherProps} />
    );
};
