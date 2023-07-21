import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonTheme, Button } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { TextTheme, Text } from '@/shared/ui/deprecated/Text';
import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = (props) => {
    const { className, onSuccess } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value));
    };

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    };

    const onLoginClick = async () => {
        const result = await dispatch(loginByUsername({ username, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    };

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <HStack
                className={classNames(cls.LoginForm, {}, [className])}
                gap="8"
                align="start"
            >
                <Text title={t('Форма авторизации')} />

                {error && (
                    <Text
                        text={t('Вы ввели неверный логин или пароль')}
                        theme={TextTheme.ERROR}
                    />
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
            </HStack>
        </DynamicModuleLoader>
    );
};

export default LoginForm;
