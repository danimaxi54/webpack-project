import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeatures } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import cls from './Sidebar.module.scss';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;

    const sidebarItemsList = useSelector(getSidebarItems);

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo className={cls.appLogo} />
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <Button
                        data-testid="sidebar-toggle"
                        type="button"
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        size={ButtonSize.L}
                        square
                    >
                        {collapsed ? '>' : '<'}
                    </Button>

                    <VStack className={cls.items} gap="8" role="navigation">
                        {sidebarItemsList.map((item) => (
                            <SidebarItem
                                key={item.path}
                                item={item}
                                collapsed={collapsed}
                            />
                        ))}
                    </VStack>

                    <div className={cls.switchers}>
                        <ThemeSwitcher />

                        <LangSwitcher className={cls.lang} short={collapsed} />
                    </div>
                </aside>
            }
        />
    );
};

export default Sidebar;
