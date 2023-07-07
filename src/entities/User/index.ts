export {
    userActions,
    userReducer,
} from './model/slice/userSlice';

export {
    User,
    UserSchema,
    UserRole,
} from './model/types/user';

export { getUserAuthData } from './model/selectors/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited';
export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelectors';
