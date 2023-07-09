import React, { FC } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

const Icon: FC<IconProps> = (props) => {
    const {
        className,
        Svg,
        inverted,
    } = props;

    const mods: Mods = {
        [cls.Icon]: !inverted,
        [cls.inverted]: inverted,
    };

    return (
        <Svg className={classNames('', mods, [className])} />
    );
};

export default Icon;
