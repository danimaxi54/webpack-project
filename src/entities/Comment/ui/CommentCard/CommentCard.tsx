import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentCard: FC<CommentCardProps> = (props) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
                gap="8"
                max
                data-testid="CommentCard.Loading"
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />

                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>

                <Skeleton width="100%" height={50} className={cls.text} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            className={classNames(cls.CommentCard, {}, [className])}
            gap="8"
            max
            data-testid="CommentCard.Content"
        >
            <AppLink
                className={cls.header}
                to={getRouteProfile(comment.user.id)}
            >
                {comment.user?.avatar && (
                    <Avatar size={30} src={comment.user.avatar} />
                )}

                <Text className={cls.username} text={comment.user.username} />
            </AppLink>

            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
};

export default CommentCard;
