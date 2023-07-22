import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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

    const { className, value, onChange, readonly } = props;

    const onChangeHandler = (value: string) => {
        onChange?.(value as Currency);
    };

    const configuredOptions = {
        label: t('Укажите валюту'),
        className: classNames('', {}, [className]),
        items: options,
        onChange: onChangeHandler,
        value,
        readonly,
        direction: 'top right' as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...configuredOptions} />}
            off={<ListBoxDeprecated {...configuredOptions} />}
        />
    );
};

export default CurrencySelect;
