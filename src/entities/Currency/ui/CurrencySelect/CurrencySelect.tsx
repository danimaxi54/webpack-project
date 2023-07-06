import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import ListBox from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Currency.RUB,
        content: Currency.RUB,
    },
    {
        value: Currency.EUR,
        content: Currency.EUR,
    },
    {
        value: Currency.USD,
        content: Currency.USD,
    },
];

const CurrencySelect: FC<CurrencySelectProps> = (props) => {
    const { t } = useTranslation('profile');

    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = (value: string) => {
        onChange?.(value as Currency);
    };

    return (
        <ListBox
            label={t('Укажите валюту')}
            className={classNames('', {}, [className])}
            items={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            direction="top right"
        />
    );
};

export default CurrencySelect;
