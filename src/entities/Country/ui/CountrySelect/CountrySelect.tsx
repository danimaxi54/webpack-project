import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';

import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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

    const { className, value, onChange, readonly } = props;

    const onChangeHandler = (value: string) => {
        onChange?.(value as Country);
    };

    const configuredOptions = {
        className: classNames('', {}, [className]),
        label: t('Укажите страну'),
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

export default CountrySelect;
