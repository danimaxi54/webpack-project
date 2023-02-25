import { FC } from 'react';

import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

const Loader: FC<LoaderProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default Loader;
