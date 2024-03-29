import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/Article';

import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import GridIconDeprecated from '@/shared/assets/icons/grid.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import GridIcon from '@/shared/assets/icons/grid-new.svg';
import {
    ButtonTheme,
    Button as ButtonDeprecated,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => GridIcon,
            off: () => GridIconDeprecated,
        }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
];

const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                    border="partial"
                >
                    <HStack gap="8">
                        {viewTypes.map((viewType) => (
                            <Icon
                                key={viewType.view}
                                clickable
                                onClick={onClick(viewType.view)}
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [cls.notSelected]: viewType.view !== view,
                                })}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                width={24}
                                height={24}
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [cls.notSelected]: viewType.view === view,
                                })}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
};

export default ArticleViewSelector;
