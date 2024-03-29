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
    SETTINGS = 'settings',

    // last
    NOT_FOUND = 'not_found',
}

// второй вариант
export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteSettings = () => '/settings';
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

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteProfile('id')]: AppRoutes.PROFILE,
    [getRouteArticles()]: AppRoutes.ARTICLES,
    [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
    [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
    [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
    [getRouteAdminPanel()]: AppRoutes.ADMIN_PANEL,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
};
