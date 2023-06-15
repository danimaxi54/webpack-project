import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/ui/Text/Text';
import Icon from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import Card from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import Avatar from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import ArticleTextBlockComponent from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView
}

const ArticleListItem: FC<ArticleListItemProps> = (props) => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const {
        className,
        article,
        view,
    } = props;

    const [isHover, bindHover] = useHover();

    const types = (
        <Text
            text={article.type.join(', ')}
            className={cls.types}
        />
    );

    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />

            <Icon Svg={EyeIcon} />
        </>
    );

    const onOpenArticle = () => navigate(RoutePath.article_details + article.id);

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={article.user.avatar}
                        />

                        <Text text={article.user.username} className={cls.username} />

                        <Text text={article.createdAt} className={cls.date} />
                    </div>

                    <Text
                        title={article.title}
                        className={cls.title}
                    />

                    {types}

                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />

                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}

                    <div className={cls.footer}>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onOpenArticle}
                        >
                            {t('Читать далее')}
                        </Button>

                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])} {...bindHover}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />

                    <Text text={article.createdAt} className={cls.date} />
                </div>

                <div className={cls.infoWrapper}>
                    {types}

                    {views}
                </div>

                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
};

export default ArticleListItem;
