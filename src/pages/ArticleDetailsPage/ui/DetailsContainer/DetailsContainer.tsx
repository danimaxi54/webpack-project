import { useParams } from 'react-router-dom';
import { FC } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer: FC<DetailsContainerProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Card fullWidth border="round" className={className} padding="24">
            <ArticleDetails id={id} />
        </Card>
    );
};
