import {
    FC,
    MutableRefObject,
    ReactNode,
    useRef,
    UIEvent,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getPageScrollByPath, pageActions } from 'widgets/Page';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    onScrollEnd?: () => void;
    children: ReactNode;
}

const Page: FC<PageProps> = (props) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const scrollPosition = useAppSelector((state) => getPageScrollByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(pageActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}

            <div ref={triggerRef} />
        </section>
    );
};

export default Page;
