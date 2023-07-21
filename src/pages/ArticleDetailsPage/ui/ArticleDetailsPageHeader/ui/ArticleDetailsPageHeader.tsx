import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonTheme, Button } from '@/shared/ui/deprecated/Button';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getCanEditArticle } from '../../../model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = (props) => {
    const { t } = useTranslation();

    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const { className } = props;

    const navigate = useNavigate();

    const onBackToList = () => {
        navigate(getRouteArticles());
    };

    const onEditArticle = () => {
        navigate(getRouteArticleEdit(article?.id as string));
    };

    return (
        <HStack
            className={classNames('', {}, [className])}
            justify="between"
            max
        >
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>

            {canEdit && (
                <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
};

export default ArticleDetailsPageHeader;
