import { FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
    children: ReactNode;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': cls.gap_0,
    '8': cls.gap_8,
    '16': cls.gap_16,
    '24': cls.gap_24,
};

export const Card: FC<CardProps> = (props) => {
    const {
        className,
        variant = 'normal',
        children,
        max,
        padding = '8',
        border = 'normal',
        ...otherProps
    } = props;

    const paddingsClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [
                className,
                cls[variant],
                paddingsClass,
                cls[border],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
