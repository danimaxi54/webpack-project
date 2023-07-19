import { FC } from 'react';

import './Loader.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 * */
export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div />

            <div />

            <div />

            <div />
        </div>
    );
};
