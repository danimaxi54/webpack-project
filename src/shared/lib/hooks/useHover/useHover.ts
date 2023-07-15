import { useState } from 'react';

interface UseHoverBind {
    onMouseLeave: () => void;
    onMouseEnter: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

export const useHover = (): UseHoverResult => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = () => setIsHover(true);

    const onMouseLeave = () => setIsHover(false);

    return [
        isHover,
        {
            onMouseEnter,
            onMouseLeave,
        },
    ];
};
