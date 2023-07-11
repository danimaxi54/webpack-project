import React, {
    Suspense,
    memo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';

import { routeConfig } from '../config/routeConfig';
import RequireAuth from './RequireAuth';
import { AppRouteProps } from '@/shared/types/router';

const AppRouter = () => {
    const renderWithWrapper = (route: AppRouteProps) => {
        const { element } = route;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly
                        ? (
                            <RequireAuth roles={route.roles}>
                                <>
                                    {element}
                                </>
                            </RequireAuth>
                        )
                        : element
                }
            />
        );
    };

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
