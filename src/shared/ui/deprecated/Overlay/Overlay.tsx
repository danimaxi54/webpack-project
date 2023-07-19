import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 * */
export const Overlay: FC<OverlayProps> = (props) => {
    const { className, onClick } = props;

    return (
        <div
            className={classNames(cls.Overlay, {}, [className])}
            onClick={onClick}
        />
    );
};
