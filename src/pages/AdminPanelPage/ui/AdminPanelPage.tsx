import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
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
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            админка!!
        </Page>
    );
};

export default AdminPanelPage;
