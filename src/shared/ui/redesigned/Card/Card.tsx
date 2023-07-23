import { FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal' | 'partial';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
    fullHeight?: boolean;
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
        children,
        variant = 'normal',
        max,
        padding = '8',
        border = 'normal',
        fullHeight,
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(
                cls.Card,
                {
                    [cls.max]: max,
                    [cls.fullHeight]: fullHeight,
                },
                [className, cls[variant], cls[paddingClass], cls[border]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};
