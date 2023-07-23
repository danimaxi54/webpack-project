import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';

interface SettingsPageProps {
    className?: string;
}

export const SettingsPage: FC<SettingsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('settings-page');

    return (
        <Page>
            <VStack gap="16">
                <Text title={t('Настройки пользователя')} />

                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
};

export default SettingsPage;
