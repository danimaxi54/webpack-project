import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FC, useMemo } from 'react';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';

import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
    roles?: UserRole[];
    children: JSX.Element;
}

const RequireAuth: FC<RequireAuthProps> = (props) => {
    const { roles, children } = props;

    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((role) => userRoles?.includes(role));
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={getRouteMain()} replace />;
    }

    if (!hasRequireRoles) {
        return <Navigate to={getRouteForbidden()} replace />;
    }

    return children;
};

export default RequireAuth;
