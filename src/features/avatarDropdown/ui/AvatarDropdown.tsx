import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Avatar from 'shared/ui/Avatar/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './AvatarDropdown.module.scss';
import Dropdown from '../../../shared/ui/Popups/ui/Dropdown/Dropdown';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const authData = useSelector(getUserAuthData);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction="bottom left"
            className={classNames(cls.AvatarDropdown, {}, [className])}
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={[
                ...(isAdminPanelAvailable ? [
                    {
                        content: t('Админка'),
                        href: RoutePath.admin_panel,
                    },
                ] : []),
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
        />
    );
};
