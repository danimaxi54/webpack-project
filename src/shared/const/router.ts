export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',

    // last
    NOT_FOUND = 'not_found',
}

// второй вариант
export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticlesDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';

// первый вариант
// export const RoutePath: Record<AppRoutes, string> = {
//     [AppRoutes.MAIN]: getRouteMain(),
//     [AppRoutes.ABOUT]: getRouteAbout(),
//     [AppRoutes.PROFILE]: getRouteProfile(':id'),
//     [AppRoutes.ARTICLES]: getRouteArticles(),
//     [AppRoutes.ARTICLE_DETAILS]: getRouteArticlesDetails(':id'),
//     [AppRoutes.ARTICLE_CREATE]: getRouteArticleCreate(),
//     [AppRoutes.ARTICLE_EDIT]: getRouteArticleEdit(':id'),
//     [AppRoutes.ADMIN_PANEL]: getRouteAdminPanel(),
//     [AppRoutes.FORBIDDEN]: getRouteForbidden(),
//     [AppRoutes.NOT_FOUND]: getRouteNotFound(),
// };
