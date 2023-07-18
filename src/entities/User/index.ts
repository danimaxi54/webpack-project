export { userActions, userReducer } from './model/slice/userSlice';

export type { User, UserSchema } from './model/types/user';

export { getUserAuthData } from './model/selectors/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited';
export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors';
export { UserRole } from './model/consts/userConsts';
export { useJsonSettings } from './model/selectors/jsonSettings';
export { saveJsonSettings } from './model/services/saveJsonSettings';
