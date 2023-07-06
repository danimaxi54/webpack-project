import { FC, Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import HStack from '../Stack/HStack/HStack';
import Button from '../Button/Button';
import cls from './ListBox.module.scss';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionBottomLeft,
    'bottom right': cls.optionBottomRight,
    'top left': cls.optionTopLeft,
    'top right': cls.optionTopRight,
};

const ListBox: FC<ListBoxProps> = (props) => {
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

    const optionsClasses = [className, mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && (
                <span>
                    {`${label}>`}
                </span>
            )}

            <HListBox
                disabled={readonly}
                className={classNames(cls.ListBox, {}, optionsClasses)}
                as="div"
                value={value}
                onChange={onChange}
            >

                <HListBox.Button
                    disabled={readonly}
                    className={cls.trigger}
                >

                    <Button>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>

                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ selected }) => (
                                <li className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: selected,
                                        [cls.disabled]: item.disabled,
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

export default ListBox;
