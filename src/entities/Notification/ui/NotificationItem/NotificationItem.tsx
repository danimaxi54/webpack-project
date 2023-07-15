import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CardTheme, Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { Notifications } from '../../model/types/notifications';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notifications;
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
    const { className, item } = props;

    const content = (
        <Card
            className={classNames(cls.NotificationItem, {}, [className])}
            theme={CardTheme.OUTLINED}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return (
        <Card
            className={classNames(cls.NotificationItem, {}, [className])}
            theme={CardTheme.OUTLINED}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );
};
