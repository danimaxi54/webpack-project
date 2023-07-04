import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Avatar from 'shared/ui/Avatar/Avatar';
import Text from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import AppLink from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment
    isLoading?: boolean;
}

const CommentCard: FC<CommentCardProps> = (props) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />

                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>

                <Skeleton
                    width="100%"
                    height={50}
                    className={cls.text}
                />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${comment.user.id}`}>
                {comment.user?.avatar && <Avatar size={30} src={comment.user.avatar} />}

                <Text className={cls.username} text={comment.user.username} />
            </AppLink>

            <Text className={cls.text} text={comment.text} />
        </div>
    );
};

export default CommentCard;
