import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from "app/providers/ThemeProvider";

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

class ThemeSwitcherPropsImpl implements ThemeSwitcherProps {
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { theme, toggleTheme } = useTheme();

    const {
        className,
    } = props;

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
