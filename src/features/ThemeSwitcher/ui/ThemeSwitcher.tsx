import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from '@/shared/ui/deprecated/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const { className } = props;

    const onToggleHandler = () => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    };

    return (
        <Button
            onClick={onToggleHandler}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            <Icon Svg={ThemeIcon} width={40} height={40} inverted />
        </Button>
    );
};

export default ThemeSwitcher;
