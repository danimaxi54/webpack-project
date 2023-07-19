import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    element?: HTMLElement;
    children: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 * */
const Portal: FC<PortalProps> = (props) => {
    const { element = document.body, children } = props;

    return createPortal(children, element);
};

export default Portal;
