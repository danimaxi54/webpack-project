import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import Page from '@/widgets/Page/ui/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <BugButton />

            {t('Главная страница')}

            <RatingCard
                title="Как вам статья?"
                feedbackTitle="Оставтьте отзыв о статье"
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
