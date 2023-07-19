import { FC } from 'react';
import Flex, { FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 * */
export const HStack: FC<HStackProps> = (props) => (
    <Flex direction="row" {...props} />
);