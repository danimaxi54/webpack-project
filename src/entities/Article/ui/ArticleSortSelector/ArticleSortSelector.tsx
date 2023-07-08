import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/consts/articleConsts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
    const { t } = useTranslation('articles');

    const {
        className,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
    } = props;

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
        }, {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ];

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
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
    );
};

export default ArticleSortSelector;
