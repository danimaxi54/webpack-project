import { FC } from 'react';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonTheme, Button } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 * */
export const Code: FC<CodeProps> = (props) => {
    const { className, text } = props;

    const onCopy = () => {
        navigator.clipboard.writeText(text);
    };

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>

            <code>{text}</code>
        </pre>
    );
};
