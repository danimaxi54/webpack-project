import { StateSchema } from '@/app/providers/StoreProvider';
import { useAppSelector } from '../hooks/useAppSelector/useAppSelector';

type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

export function buildSelector<T, Args extends any[]>(
    selector: Selector<T, Args>,
): Result<T, Args> {
    const useSelectorHook: Hook<T, Args> = (...args: Args) =>
        useAppSelector((state) => selector(state, ...args));

    return [useSelectorHook, selector];
}
