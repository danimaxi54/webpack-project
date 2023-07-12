import { FC, lazy, Suspense } from 'react';
import { ArticleRatingProps } from '../ArticleRating/ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton';

const ArticleRating = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync: FC<ArticleRatingProps> = (props) => (
    <Suspense fallback={(
        <Skeleton
            width="100%"
            height={140}
        />
    )}
    >
        <ArticleRating {...props} />
    </Suspense>
);
