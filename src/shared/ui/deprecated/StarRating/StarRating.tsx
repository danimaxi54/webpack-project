import { FC, useState } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '../../../assets/icons/star.svg';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 * */
export const StarRating: FC<StarRatingProps> = (props) => {
    const { className, selectedStars = 0, size = 30, onSelect } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber, index) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        {
                            [cls.hovered]: currentStarsCount >= starNumber,
                            [cls.normal]: !(currentStarsCount >= starNumber),
                            [cls.selected]: isSelected,
                        },
                        [],
                    )}
                    key={index}
                    Svg={StarIcon}
                    width={size}
                    height={size}
                    inverted
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating.${starNumber}`}
                    data-selected={currentStarsCount >= starNumber}
                />
            ))}
        </div>
    );
};
