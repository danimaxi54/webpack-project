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

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;

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
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
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
};
