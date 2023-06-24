import {
    ArticleDetailsPageRecommendationsSchema,
} from './articleDetailsPageRecommendationsSchema';
import {
    ArticleDetailsCommentsSchema,
} from './articleDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationsSchema
}
