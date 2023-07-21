import { FC, Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import { HStack } from '../../../../redesigned/Stack/HStack/HStack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

export const ListBox: FC<ListBoxProps> = (props) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'bottom left',
    } = props;

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}

            <HListBox
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                as="div"
                value={value}
                onChange={onChange}
            >
                <HListBox.Button disabled={readonly} className={cls.trigger}>
                    <Button>{value ?? defaultValue}</Button>
                </HListBox.Button>

                <HListBox.Options
                    className={classNames(cls.options, {}, [
                        mapDirectionClass[direction],
                        popupCls.menu,
                    ])}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: selected,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                        [],
                                    )}
                                >
                                    {selected && '!!!!!'}

                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
