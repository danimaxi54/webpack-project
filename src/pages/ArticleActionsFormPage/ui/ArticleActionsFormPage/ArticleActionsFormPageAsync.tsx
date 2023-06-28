import { lazy } from 'react';

export const ArticleActionsFormPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleActionsFormPage')), 400);
}));
