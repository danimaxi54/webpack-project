import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const {
        className,
    } = props;

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toggle}
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}
        </Button>
    );
};

export default LangSwitcher;
