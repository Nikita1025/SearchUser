import { Provider } from 'react-redux';
import { createReduxStore } from '../../StoreProvider/config/createReduxStore';
import { ReactNode } from 'react';
import { StateSchema } from '../../StoreProvider/config/StateSchema';

interface StoreProviderProps{
    initialState?:DeepPartial<StateSchema>
    children?:ReactNode
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(
        initialState as StateSchema,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
