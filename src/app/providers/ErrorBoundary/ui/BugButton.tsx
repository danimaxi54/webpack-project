import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';

const BugButton: FC = () => {
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    const onThrowError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={onThrowError}>{t('Бросить ошибку')}</Button>;
};

export default BugButton;
