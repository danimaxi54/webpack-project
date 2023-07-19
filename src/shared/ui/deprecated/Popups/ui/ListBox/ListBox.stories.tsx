import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => (
            <div style={{ padding: '100px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        {
            value: '123',
            content: '123',
        },
        {
            value: '123',
            content: '123',
        },
        {
            value: '123',
            content: '123',
        },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    value: '123',
    direction: 'top left',
    items: [
        {
            value: '123',
            content: '123',
        },
        {
            value: '123',
            content: '123',
        },
        {
            value: '123',
            content: '123',
        },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    value: '123',
    direction: 'top right',
    items: [
        {
            value: '123',
            content: '123',
        },
        {
            value: '123',
            content: '123',
        },
        {
            value: '123',
            content: '123',
        },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: '123',
    direction: 'bottom left',
    items: [
        {
            value: '123',
            content: '123',
        },
        {
            value: '123',
            content: '123',
        },
        {
            value: '123',
            content: '123',
        },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    value: '123',
    direction: 'bottom right',
    items: [
        {
            value: '123',
            content: '123',
        },
        {
            value: '123',
            content: '123',
        },
        {
            value: '123',
            content: '123',
        },
    ],
};
