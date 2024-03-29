import React, { FC, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import Portal from '../Portal/Portal';
import cls from './Modal.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { isMounted, isClosing, close } = useModal({ onClose, isOpen });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => cls.modalNew,
                        off: () => cls.modalOld,
                    }),
                ])}
            >
                <Overlay className={cls.overlay} onClick={close} />

                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
