import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

const ForceUpdateContext = createContext({
    value: true,
    forceUpdate: () => {},
});

export const useForceUpdate = () => {
    const { forceUpdate } = useContext(ForceUpdateContext);

    return forceUpdate;
};

export const ForceUpdateProvider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState(true);

    const forceUpdate = useCallback(() => {
        setValue((prev) => !prev);

        setTimeout(() => {
            setValue((prev) => !prev);
        }, 0);
    }, []);

    const providerValue = useMemo(
        () => ({
            value,
            forceUpdate,
        }),
        [forceUpdate, value],
    );

    if (!value) {
        return null;
    }

    return (
        <ForceUpdateContext.Provider value={providerValue}>
            {children}
        </ForceUpdateContext.Provider>
    );
};
