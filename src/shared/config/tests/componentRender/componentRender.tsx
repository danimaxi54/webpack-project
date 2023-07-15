import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '../../i18n/i18nForTests';
// eslint-disable-next-line danimaxi54-plugin-new/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '../../../const/theme';
// eslint-disable-next-line danimaxi54-plugin-new/layer-imports
import '@/app/styles/index.scss';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    theme?: Theme;
}

interface TestProviderProps {
    options?: componentRenderOptions;
    children: ReactNode;
}

export function TestProvider(props: TestProviderProps) {
    const {
        children,
        options = {},

    } = props;

    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                initialState={initialState}
                asyncReducers={asyncReducers}
            >
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    render(
        <TestProvider options={options}>
            {component}
        </TestProvider>,
    );
}
