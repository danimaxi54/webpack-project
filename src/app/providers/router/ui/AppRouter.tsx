import React, { Suspense, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import RequireAuth from './RequireAuth';

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
                            <RequireAuth>
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
