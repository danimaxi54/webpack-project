import { Menu } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    href?: string;
    content?: ReactNode;
    onClick?: () => void;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 * */
export const Dropdown: FC<DropdownProps> = (props) => {
    const { className, trigger, items, direction = 'top right' } = props;

    const menuClasses = [className, mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Menu.Button className={popupCls.trigger} as="div">
                {trigger}
            </Menu.Button>

            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            disabled={item.disabled}
                            type="button"
                            className={classNames(
                                cls.item,
                                { [popupCls.active]: active },
                                [],
                            )}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={index}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            key={index}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
