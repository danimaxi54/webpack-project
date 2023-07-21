import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ViewSelectorContainer.module.scss';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
    className?: string;
}

const ViewSelectorContainer: FC<ViewSelectorContainerProps> = (props) => {
    const { className } = props;

    const { view, onChangeView } = useArticleFilters();

    return (
        <div className={classNames(cls.ViewSelectorContainer, {}, [className])}>
            <ArticleViewSelector
                className={className}
                view={view}
                onViewClick={onChangeView}
            />
        </div>
    );
};

export default ViewSelectorContainer;
