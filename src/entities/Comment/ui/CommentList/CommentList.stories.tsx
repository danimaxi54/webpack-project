import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'text',
            user: {
                id: '1',
                username: 'username',
                avatar: 'https://avatars.githubusercontent.com/u/69904650?s=400&u=2c3a6015db26f57b2f557d1a1ec58bf54a35f573&v=4',
            },
        },
        {
            id: '2',
            text: 'text 2',
            user: {
                id: '1',
                username: 'username',
                avatar: 'https://avatars.githubusercontent.com/u/69904650?s=400&u=2c3a6015db26f57b2f557d1a1ec58bf54a35f573&v=4',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
