import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups';
import { Country } from '../../model/types/country';

interface CurrencySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Country.Armenia,
        content: Country.Armenia,
    },
    {
        value: Country.Belarus,
        content: Country.Belarus,
    },
    {
        value: Country.Kazakhstan,
        content: Country.Kazakhstan,
    },
    {
        value: Country.Russia,
        content: Country.Russia,
    },
    {
        value: Country.Ukraine,
        content: Country.Ukraine,
    },
];

const CountrySelect: FC<CurrencySelectProps> = (props) => {
    const { t } = useTranslation('profile');

    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = (value: string) => {
        onChange?.(value as Country);
    };

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            items={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            direction="top right"
        />
    );
};

export default CountrySelect;
