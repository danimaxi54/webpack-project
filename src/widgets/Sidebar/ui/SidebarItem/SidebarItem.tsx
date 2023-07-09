import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
    authOnly?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    const {
        item,
        collapsed,
    } = props;

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />

            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
};

export default SidebarItem;
