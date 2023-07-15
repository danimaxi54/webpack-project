import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

const Counter = () => {
    const { t } = useTranslation();

    const counterValue = useCounterValue();
    const { decrement, increment, add } = useCounterActions();

    const handleDecrement = () => decrement();
    const handleIncrement = () => increment();

    const handleAddFive = () => add(5);

    return (
        <>
            <h1 data-testid="value-title">{counterValue}</h1>

            <Button onClick={handleIncrement} data-testid="increment-btn">
                {t('Увеличить')}
            </Button>

            <Button onClick={handleDecrement} data-testid="decrement-btn">
                {t('Уменьшить')}
            </Button>
        </>
    );
};

export default Counter;
