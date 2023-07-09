import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Icon from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = (props) => {
    const {
        className,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = () => {
        setIsOpen(true);
    };

    const onCloseDrawer = () => {
        setIsOpen(false);
    };

    const trigger = (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onOpenDrawer}
        >
            <Icon
                Svg={NotificationIcon}
                inverted
            />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>

            <MobileView>
                {trigger}

                <Drawer
                    isOpen={isOpen}
                    onClose={onCloseDrawer}
                >
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
};