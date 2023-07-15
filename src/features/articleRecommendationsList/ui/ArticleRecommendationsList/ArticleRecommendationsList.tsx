import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextSize, Text } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const {
            data: recommendations,
            isLoading,
            error,
        } = useArticleRecommendationsList(3);

        if (error || !recommendations) {
            return null;
        }

        return (
            <VStack
                className={classNames('', {}, [className])}
                gap="8"
                data-testid="ArticleRecommendationsList"
            >
                <Text title={t('Рекомендуем')} size={TextSize.L} />

                <ArticleList
                    articles={recommendations}
                    isLoading={isLoading}
                    target="_blank"
                    // virtualized={false}
                />
            </VStack>
        );
    },
);
