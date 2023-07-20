import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface IconClickableProps extends IconBaseProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    clickable?: false;
}

interface IconNonClickableProps extends IconBaseProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    clickable: true;
    onClick: () => void;
}

type IconProps = IconClickableProps | IconNonClickableProps;

export const Icon: FC<IconProps> = (props) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        const { onClick } = props;

        return (
            <button
                className={cls.button}
                type="button"
                onClick={onClick}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
};
