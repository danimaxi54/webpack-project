import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
// import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <Page data-testid="MainPage">
            {/* <BugButton /> */}

            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
