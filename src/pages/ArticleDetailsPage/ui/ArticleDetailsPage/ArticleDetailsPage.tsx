import { useParams } from 'react-router-dom';
import { FC } from 'react';
import { ArticleDetails } from '@/entities/Article';

import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import Page from '@/widgets/Page/ui/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ui/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slice';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />

                    <ArticleDetails id={id} />

                    <ArticleRecommendationsList />

                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>

    );
};

export default ArticleDetailsPage;
