import { useParams } from 'react-router-dom';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';

import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ui/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleRating } from '@/features/articleRating';
import { Card } from '@/shared/ui/deprecated/Card';
import { ToggleFeatures } from '@/shared/lib/features';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />

                    <ArticleDetails id={id} />

                    <ToggleFeatures
                        feature="isArticleRatingEnabled"
                        on={<ArticleRating articleId={id} />}
                        off={<Card>{t('Оценка статей скоро появится')}</Card>}
                    />

                    <ArticleRecommendationsList />

                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
