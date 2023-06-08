import { FC, ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { StateSchema } from '../config/StateShema';
import createReduxStore from '../config/store';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema> ;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    children?: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const navigate = useNavigate();

    const store = useMemo(() => createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate,
    ), []);

    return (
        <Provider store={store}>{children}</Provider>
    );
};

export default StoreProvider;
