import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
// import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextSize, Text } from '@/shared/ui/deprecated/Text';
// import { PAGE_ID } from '@/widgets/Page/ui/Page';
import { ArticleView } from '../../model/consts/articleConsts';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    // virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
        ));

const ArticleList: FC<ArticleListProps> = (props) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        // virtualized = true,
    } = props;

    const { t } = useTranslation();

    // const isBig = view === ArticleView.BIG;

    // const itemsPerRow = isBig ? 1 : 3;
    // const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);
    //
    // const rowRender = ({
    //     index,
    //     key,
    //     style,
    // }: ListRowProps) => {
    //     const items = [];
    //     const fromIndex = index * itemsPerRow;
    //     const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
    //
    //     for (let i = fromIndex; i < toIndex; i += 1) {
    //         items.push(
    //             <ArticleListItem
    //                 article={articles[i]}
    //                 view={view}
    //                 target={target}
    //                 key={i}
    //                 className={cls.card}
    //             />,
    //         );
    //     }
    //
    //     return (
    //         <div
    //             key={key}
    //             style={style}
    //             className={cls.row}
    //         >
    //             {items}
    //         </div>
    //     );
    // };

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    // return (
    //     // @ts-ignore
    //     <WindowScroller
    //         scrollElement={document.getElementById(PAGE_ID) as Element}
    //     >
    //         {({
    //             height,
    //             width,
    //             registerChild,
    //             onChildScroll,
    //             isScrolling,
    //             scrollTop,
    //         }) => (
    //             <div
    //                 // @ts-ignore
    //                 ref={registerChild}
    //                 className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    //             >
    //                 {virtualized
    //                     ? (
    //                         // @ts-ignore
    //                         <List
    //                             height={height ?? 700}
    //                             rowCount={rowCount}
    //                             rowHeight={isBig ? 700 : 330}
    //                             rowRenderer={rowRender}
    //                             width={width ? width - 80 : 700}
    //                             autoHeight
    //                             onScroll={onChildScroll}
    //                             isScrolling={isScrolling}
    //                             scrollTop={scrollTop}
    //                         />
    //                     )
    //                     : (
    //                         articles.map((item, index) => (
    //                             <ArticleListItem
    //                                 article={item}
    //                                 view={view}
    //                                 target={target}
    //                                 key={index}
    //                                 className={cls.card}
    //                             />
    //                         ))
    //                     )}
    //
    //                 {isLoading && getSkeletons(view)}
    //             </div>
    //         )}
    //     </WindowScroller>
    // );

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            data-testid="ArticleList"
        >
            {articles.map((item, index) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    target={target}
                    key={index}
                    className={cls.card}
                />
            ))}

            {isLoading && getSkeletons(view)}
        </div>
    );
};

export default ArticleList;
