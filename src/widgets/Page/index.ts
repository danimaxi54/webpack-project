export { default as Page } from './ui/Page';

export type { PageSchema } from './model/types/pageSchema';

export { getPageScrollByPath } from './model/selectors/getPageScroll';
export { pageActions, pageReducer } from './model/slices/pageSlice';
