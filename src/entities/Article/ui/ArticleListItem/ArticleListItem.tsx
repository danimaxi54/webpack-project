import React, { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { ButtonTheme, Button } from '@/shared/ui/deprecated/Button';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import {
    ArticleBlockType,
    ArticleView,
} from '../../model/consts/articleConsts';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Article, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { getRouteArticlesDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const ArticleListItem: FC<ArticleListItemProps> = (props) => {
    const { t } = useTranslation();

    const { className, article, view, target } = props;

    const [isHover, bindHover] = useHover();

    const types = <Text text={article.type.join(', ')} className={cls.types} />;

    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />

            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleListItem"
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />

                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />

                        <Text text={article.createdAt} className={cls.date} />
                    </div>

                    <Text title={article.title} className={cls.title} />

                    {types}

                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />

                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}

                    <div className={cls.footer}>
                        <AppLink
                            className={cls.footer}
                            to={getRouteArticlesDetails(article.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее')}
                            </Button>
                        </AppLink>

                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            to={getRouteArticlesDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
            target={target}
            data-testid="ArticleListItem"
            {...bindHover}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />

                    <Text text={article.createdAt} className={cls.date} />
                </div>

                <div className={cls.infoWrapper}>
                    {types}

                    {views}
                </div>

                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
};

export default ArticleListItem;
