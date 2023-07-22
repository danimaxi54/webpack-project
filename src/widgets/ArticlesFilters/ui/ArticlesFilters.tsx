import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { Input } from '@/shared/ui/redesigned/Input';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    searchValue: string;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeSearch: (value: string) => void;
    onChangeType: (newSort: TabItem<ArticleType>) => void;
    selectedTab: ArticleType;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = (props) => {
    const { t } = useTranslation('articles');

    const {
        className,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
        selectedTab,
        onChangeType,
        searchValue,
        onChangeSearch,
    } = props;

    return (
        <Card
            className={classNames(cls.ArticlesFilters, {}, [className])}
            padding="24"
        >
            <VStack gap="32">
                <Input
                    size="s"
                    value={searchValue}
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                    addonLeft={<Icon Svg={SearchIcon} />}
                />

                <ArticleTypeTabs
                    value={selectedTab}
                    onTabClick={onChangeType}
                    className={cls.tabs}
                />

                <ArticleSortSelector
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    order={order}
                />
            </VStack>
        </Card>
    );
};
