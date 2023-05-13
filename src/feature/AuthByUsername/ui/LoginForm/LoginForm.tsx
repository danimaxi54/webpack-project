import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input className={cls.input} placeholder={t('Введите username')} autofocus />

            <Input className={cls.input} placeholder={t('Введите password')} />

            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};

export default LoginForm;
