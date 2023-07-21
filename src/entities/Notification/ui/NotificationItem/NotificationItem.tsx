import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CardTheme, Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Notifications } from '../../model/types/notifications';
import cls from './NotificationItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface NotificationItemProps {
    className?: string;
    item: Notifications;
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
    const { className, item } = props;

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <Text title={item.title} text={item.description} />
                </Card>
            }
            off={
                <CardDeprecated
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                    theme={CardTheme.OUTLINED}
                >
                    <TextDeprecated
                        title={item.title}
                        text={item.description}
                    />
                </CardDeprecated>
            }
        />
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

    return content;
};
