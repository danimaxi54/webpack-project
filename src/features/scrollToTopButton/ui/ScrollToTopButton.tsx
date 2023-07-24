import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton: FC<ScrollToTopButtonProps> = (props) => {
    const { className } = props;

    const onClick = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    };

    return (
        <Icon
            Svg={CircleIcon}
            className={classNames(cls.ScrollToTopButton, {}, [className])}
            clickable
            width={32}
            height={32}
            onClick={onClick}
        />
    );
};
