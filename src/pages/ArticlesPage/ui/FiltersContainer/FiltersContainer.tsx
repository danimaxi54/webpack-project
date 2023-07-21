import { FC } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer: FC<FiltersContainerProps> = (props) => {
    const { className } = props;

    const {
        onChangeSort,
        sort,
        onChangeOrder,
        order,
        onChangeSearch,
        search,
        onChangeType,
        type,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            className={className}
            searchValue={search}
            sort={sort}
            onChangeSort={onChangeSort}
            order={order}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            selectedTab={type}
        />
    );
};
