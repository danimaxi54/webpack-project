import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Select from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country';

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
    const { t } = useTranslation();

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
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
        />
    );
};

export default CountrySelect;
