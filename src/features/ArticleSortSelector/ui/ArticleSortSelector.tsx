import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SelectOption, Select } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
    const { t } = useTranslation('articles');

    const { className, onChangeSort, sort, onChangeOrder, order } = props;

    const orderOptions: SelectOption<SortOrder>[] = [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ];

    const sortFieldOptions: SelectOption<ArticleSortField>[] = [
        {
            value: ArticleSortField.CREATED_AT,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div
                    className={classNames(
                        cls.ArticleSortSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <VStack gap="8">
                        <Text text={t('Сортировать по')} />

                        <ListBox<ArticleSortField>
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />

                        <ListBox<SortOrder>
                            items={orderOptions}
                            value={order}
                            onChange={onChangeOrder}
                        />
                    </VStack>
                </div>
            }
            off={
                <div
                    className={classNames(cls.ArticleSortSelector, {}, [
                        className,
                    ])}
                >
                    <Select<SortOrder>
                        label={t('Сортировать по')}
                        options={orderOptions}
                        value={order}
                        onChange={onChangeOrder}
                    />

                    <Select<ArticleSortField>
                        label={t('по')}
                        options={sortFieldOptions}
                        value={sort}
                        onChange={onChangeSort}
                        className={cls.order}
                    />
                </div>
            }
        />
    );
};

export default ArticleSortSelector;
