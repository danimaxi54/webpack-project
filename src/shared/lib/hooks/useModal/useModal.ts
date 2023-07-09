import {
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay?: number;
}

interface UseModalResult {
    close?: () => void;
    isMounted: boolean;
    isClosing: boolean;
}

const ANIMATION_DELAY = 300;

export const useModal = (props: UseModalProps): UseModalResult => {
    const {
        onClose,
        isOpen,
        animationDelay = ANIMATION_DELAY,
    } = props;

    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const close = () => {
        if (onClose) {
            setIsClosing(true);

            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    };

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen]);

    return {
        isClosing,
        isMounted,
        close,
    };
};
