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
        <Card max border="partial" className={className} padding="24">
            <ArticleDetails id={id} />
        </Card>
    );
};
