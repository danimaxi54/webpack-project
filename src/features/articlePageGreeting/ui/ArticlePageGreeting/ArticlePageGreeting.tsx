import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { isArticlesPageWasOpened } = useJsonSettings();

    const onClose = () => setIsOpen(false);

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t(
                'Вы можете искать и просматривать статьи на различные темы',
            )}
        />
    );

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, []);

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} lazy onClose={onClose}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal isOpen={isOpen} lazy onClose={onClose}>
            {text}
        </Modal>
    );
});
