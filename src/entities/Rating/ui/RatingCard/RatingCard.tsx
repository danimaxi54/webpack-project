import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { ButtonSize, ButtonTheme, Button } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard: FC<RatingCardProps> = (props) => {
    const {
        className,
        onCancel,
        onAccept,
        feedbackTitle,
        hasFeedback,
        title,
        rate = 0,
    } = props;

    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
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

    const onClickOutsideModal = () => {
        setIsModalOpen(false);
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
        <Card
            className={classNames('', {}, [className])}
            max
        >
            <VStack align="center">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />

                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />

                <BrowserView>
                    <Modal
                        isOpen={isModalOpen}
                        lazy
                        onClose={onClickOutsideModal}
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
                                    {t('Отправить')}
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
