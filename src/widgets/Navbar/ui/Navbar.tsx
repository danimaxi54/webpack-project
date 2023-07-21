import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonTheme, Button } from '@/shared/ui/deprecated/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import cls from './Navbar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    const onShowModal = () => {
        setIsAuthModal(true);
    };

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header
                        className={classNames(cls.NavbarRedesigned, {}, [
                            className,
                        ])}
                    >
                        <HStack className={cls.actions} gap="16">
                            <NotificationButton />

                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(cls.Navbar, {}, [className])}>
                        <Text
                            className={cls.appName}
                            title={t('danimaxi54 App')}
                            theme={TextTheme.INVERTED}
                        />

                        <AppLink
                            to={getRouteArticleCreate()}
                            theme={AppLinkTheme.SECONDARY}
                            className={cls.createArticleLink}
                        >
                            {t('Создать статью')}
                        </AppLink>

                        <HStack className={cls.actions} gap="16">
                            <NotificationButton />

                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>

            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
};

export default Navbar;
