import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../../model/selectors/article';
import { RoutePath } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = (props) => {
    const { t } = useTranslation();

    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const {
        className,
    } = props;

    const navigate = useNavigate();

    const onBackToList = () => {
        navigate(RoutePath.articles);
    };

    const onEditArticle = () => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    };

    return (
        <HStack
            className={classNames('', {}, [className])}
            justify="between"
            max
        >
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>

            {canEdit && (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
};

export default ArticleDetailsPageHeader;
