import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import Card from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import Text from '@/shared/ui/Text/Text';
import StarRating from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import Input from '@/shared/ui/Input/Input';
import Button, { ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount:number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard: FC<RatingCardProps> = (props) => {
    const {
        className,
        onCancel,
        onAccept,
        feedbackTitle,
        hasFeedback,
        title,
    } = props;

    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);

        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    };

    const acceptHandler = () => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    };

    const cancelHandler = () => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    };

    const modalContent = (
        <>
            <Text title={feedbackTitle} />

            <Input
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack align="center">
                <Text title={title} />

                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                />

                <BrowserView>
                    <Modal
                        isOpen={isModalOpen}
                        lazy
                    >
                        <VStack
                            gap="32"
                            max
                        >
                            {modalContent}

                            <HStack
                                max
                                gap="16"
                                justify="end"
                            >
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={cancelHandler}
                                >
                                    {t('Закрыть')}
                                </Button>

                                <Button onClick={acceptHandler}>
                                    {t('Закрыть')}
                                </Button>
                            </HStack>
                        </VStack>

                    </Modal>
                </BrowserView>

                <MobileView>
                    <Drawer
                        isOpen={isModalOpen}
                        onClose={cancelHandler}
                        lazy
                    >
                        <VStack gap="32">
                            {modalContent}

                            <Button
                                onClick={acceptHandler}
                                size={ButtonSize.L}
                                fullWidth
                            >
                                {t('Отправить')}
                            </Button>
                        </VStack>
                    </Drawer>
                </MobileView>
            </VStack>
        </Card>
    );
};
