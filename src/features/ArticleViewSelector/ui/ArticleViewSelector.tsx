import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/Article';

import ListIcon from '@/shared/assets/icons/list.svg';
import GridIcon from '@/shared/assets/icons/grid.svg';
import { ButtonTheme, Button } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: GridIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        width={24}
                        height={24}
                        Svg={viewType.icon}
                        className={classNames('', {
                            [cls.notSelected]: viewType.view === view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
};

export default ArticleViewSelector;
