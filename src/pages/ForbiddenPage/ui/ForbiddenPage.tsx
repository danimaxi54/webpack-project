import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <Page
            data-testid="ForbiddenPage"
            className={classNames(cls.ForbiddenPage, {}, [className])}
        >
            {t('Доступ запрещен')}
        </Page>
    );
};

export default ForbiddenPage;
