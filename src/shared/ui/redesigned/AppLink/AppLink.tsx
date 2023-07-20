import { FC } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLInkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLInkVariant;
    activeClassname?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        children,
        theme = 'primary',
        activeClassname = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(
                    cls.AppLink,
                    {
                        [activeClassname]: isActive,
                    },
                    [className, cls[theme]],
                )
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
};
