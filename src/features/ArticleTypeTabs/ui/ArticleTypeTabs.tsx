import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onTabClick: (tab: TabItem<ArticleType>) => void;
}

const ArticleTypeTabs: FC<ArticleTypeTabsProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
        value,
        onTabClick,
    } = props;

    const typeTabs: TabItem<ArticleType>[] = [
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ];

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
};

export default ArticleTypeTabs;
