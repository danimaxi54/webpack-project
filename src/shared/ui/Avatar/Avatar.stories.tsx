import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from './Avatar';

import MockImage from './mock-image.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    alt: 'Image',
    size: 150,
    src: MockImage,
};

export const Small = Template.bind({});
Small.args = {
    alt: 'Image',
    size: 50,
    src: MockImage,
};
