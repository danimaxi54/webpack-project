import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import { Navigate } from 'react-router-dom';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { FC, useMemo } from 'react';

interface RequireAuthProps {
    roles?: UserRole[]
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
        return <Navigate to={RoutePath.main} replace />;
    }

    if (!hasRequireRoles) {
        return <Navigate to={RoutePath.forbidden} replace />;
    }

    return children;
};

export default RequireAuth;
