import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import Flex, { FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem<T> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T> {
    className?: string;
    tabs: TabItem<T>[];
    onTabClick: (tab: TabItem<T>) => void;
    value: string;
    direction?: FlexDirection;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick, direction = 'row' } = props;

    const handleClick = (tab: TabItem<T>) => () => onTabClick(tab);

    return (
        <Flex
            direction={direction}
            className={classNames(cls.Tabs, {}, [className])}
            gap="8"
            align="start"
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;

                return (
                    <Card
                        key={tab.value}
                        className={classNames(
                            cls.tab,
                            { [cls.selected]: isSelected },
                            [],
                        )}
                        variant={isSelected ? 'light' : 'normal'}
                        onClick={handleClick(tab)}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
};
