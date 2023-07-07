import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { data: recommendations = [], isLoading, error } = useArticleRecommendationsList(3);

    if (error) {
        return null;
    }

    return (
        <VStack
            className={classNames('', {}, [className])}
            gap="8"
        >
            <Text
                title={t('Рекомендуем')}
                size={TextSize.L}
            />

            <ArticleList
                articles={recommendations}
                isLoading={isLoading}
                target="_blank"
            />
        </VStack>
    );
});
