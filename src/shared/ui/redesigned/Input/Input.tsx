import {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    label?: string;
    size?: InputSize;

    'data-testid'?: string;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        onChange,
        value,
        placeholder = '',
        type = 'text',
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        size = 'm',
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    const input = (
        <div
            className={classNames(cls.InputWrapper, mods, [
                className,
                cls[size],
            ])}
        >
            {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}

            <input
                ref={inputRef}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                onBlur={onBlur}
                onFocus={onFocus}
                readOnly={readonly}
                placeholder={placeholder}
                {...otherProps}
            />

            {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
        </div>
    );

    if (label) {
        return (
            <HStack max gap="8">
                <Text text={label} />

                {input}
            </HStack>
        );
    }

    return input;
};
