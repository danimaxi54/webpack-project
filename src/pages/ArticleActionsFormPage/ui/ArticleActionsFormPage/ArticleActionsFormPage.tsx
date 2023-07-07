import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';

interface ArticleActionsFormPageProps {
    className?: string;
}

const ArticleActionsFormPage: FC<ArticleActionsFormPageProps> = (props) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    const {
        className,
    } = props;

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? t('Редактирование статьи с ID = ') + id : t('Создание новой статьи')}
        </Page>
    );
};

export default ArticleActionsFormPage;
