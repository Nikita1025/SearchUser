import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export interface RenderComponentsOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;

}
export const renderComponents = (component:ReactNode, options: RenderComponentsOptions = {}) => {
    const { route = '/', initialState } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                {component}
            </StoreProvider>
        </MemoryRouter>,

    );
};
