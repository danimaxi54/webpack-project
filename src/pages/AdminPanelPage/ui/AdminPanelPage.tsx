import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <Page
            data-testid="AdminPanelPage"
            className={classNames(cls.AdminPanelPage, {}, [className])}
        >
            ...
        </Page>
    );
};

export default AdminPanelPage;
