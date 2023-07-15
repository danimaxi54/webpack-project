import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CardTheme, Card } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T> {
    className?: string;
    tabs: TabItem<T>[];
    onTabClick: (tab: TabItem<T>) => void;
    value: string;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick } = props;

    const handleClick = (tab: TabItem<T>) => () => onTabClick(tab);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={cls.tab}
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    onClick={handleClick(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
