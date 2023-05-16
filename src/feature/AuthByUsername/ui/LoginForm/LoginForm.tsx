import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value));
    };

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    };

    const onLoginClick = () => {
        dispatch(loginByUsername({ username, password }));
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />

            {error && (
                <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />
            )}

            <Input
                className={cls.input}
                placeholder={t('Введите username')}
                autofocus
                onChange={onChangeUsername}
                value={username}
            />

            <Input
                className={cls.input}
                placeholder={t('Введите password')}
                onChange={onChangePassword}
                value={password}
            />

            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};

export default LoginForm;
