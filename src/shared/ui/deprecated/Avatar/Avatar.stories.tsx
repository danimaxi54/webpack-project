import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';

import StorybookImage from '../../../assets/tests/storybook.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    alt: 'Image',
    size: 150,
    src: StorybookImage,
};

export const Small = Template.bind({});
Small.args = {
    alt: 'Image',
    size: 50,
    src: StorybookImage,
};
