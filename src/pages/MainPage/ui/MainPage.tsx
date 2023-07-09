import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import Page from '@/widgets/Page/ui/Page';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <BugButton />

            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
