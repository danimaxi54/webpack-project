import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Page from 'widgets/Page/ui/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
};

export default NotFoundPage;
