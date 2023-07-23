import React, { FC, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    ButtonTheme,
    Button as ButtonDeprecated,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/notification.svg';
import NotificationIcon from '@/shared/assets/icons/notification-new.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = (props) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = () => {
        setIsOpen(true);
    };

    const onCloseDrawer = () => {
        setIsOpen(false);
    };

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={onOpenDrawer}
                >
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
        />
    );

    return (
        <>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames('', {}, [className])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames('', {}, [className])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                />
            </BrowserView>

            <MobileView>
                {trigger}

                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
};
