import { FC, HTMLAttributeAnchorTarget } from 'react';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const ArticleListItem: FC<ArticleListItemProps> = (props) => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<ArticleListItemRedesigned {...props} />}
        off={<ArticleListItemDeprecated {...props} />}
    />
);

export default ArticleListItem;
