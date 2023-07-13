import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = (props) => {
    const {
        className,
        articleId,
    } = props;

    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { isLoading, data } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });
    const [rateArticleMutation] = useRateArticle();

    const rating = data?.[0];

    const handleRateArticle = (starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    };

    const onCancel = (starsCount: number) => {
        handleRateArticle(starsCount);
    };

    const onAccept = (starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    };

    if (isLoading) {
        return (
            <Skeleton
                width="100%"
                height={120}
            />
        );
    }

    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
            rate={rating?.rate}
            onCancel={onCancel}
            onAccept={onAccept}
        />
    );
};

export default ArticleRating;