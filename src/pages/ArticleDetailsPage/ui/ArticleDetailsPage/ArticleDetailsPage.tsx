import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';

import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'feature/AddCommentForm';
import Page from 'widgets/Page/ui/Page';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ui/ArticleDetailsPageHeader';
import {
    getArticleRecommendationsIsLoading,
} from '../../model/selectors/recommendations';
import { articleDetailsPageReducer } from '../../model/slice';
import {
    fetchArticlesRecommendations,
} from '../../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations';
import {
    getArticleRecommendations,
} from '../../model/slice/articleDetailsPageRecommendationsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('article-details');

    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticlesRecommendations());
    });

    const {
        className,
    } = props;

    const onSendComment = (value: string) => {
        dispatch(addCommentForArticle(value));
    };

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <div className={classNames('', {}, [className])}>
                    <ArticleDetailsPageHeader />

                    <ArticleDetails id={id} />

                    <>
                        <Text
                            title={t('Рекомендуем')}
                            className={cls.commentTitle}
                            size={TextSize.L}
                        />

                        <ArticleList
                            articles={recommendations}
                            isLoading={recommendationsIsLoading}
                            className={cls.recommendations}
                            target="_blank"
                        />
                    </>

                    <>
                        <Text
                            title={t('Комментарии')}
                            className={cls.commentTitle}
                            size={TextSize.L}
                        />

                        <AddCommentForm onSendComment={onSendComment} />
                    </>

                    <CommentList
                        comments={comments}
                        isLoading={commentsIsLoading}
                    />
                </div>
            </Page>
        </DynamicModuleLoader>

    );
};

export default ArticleDetailsPage;
