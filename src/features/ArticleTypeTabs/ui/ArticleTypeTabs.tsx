import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onTabClick: (tab: TabItem<ArticleType>) => void;
}

const ArticleTypeTabs: FC<ArticleTypeTabsProps> = (props) => {
    const { t } = useTranslation();

    const { className, value, onTabClick } = props;

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    direction="column"
                    className={classNames('', {}, [className])}
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                />
            }
            off={
                <TabsDeprecated
                    className={classNames('', {}, [className])}
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                />
            }
        />
    );
};

export default ArticleTypeTabs;
