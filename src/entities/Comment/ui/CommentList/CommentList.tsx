import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

const CommentList: FC<CommentListProps> = (props) => {
    const { t } = useTranslation();

    const { className, comments, isLoading } = props;

    if (isLoading) {
        return (
            <VStack className={classNames('', {}, [className])} gap="16" max>
                <CommentCard isLoading />

                <CommentCard isLoading />

                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack className={classNames('', {}, [className])} gap="16" max>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </VStack>
    );
};

export default CommentList;
