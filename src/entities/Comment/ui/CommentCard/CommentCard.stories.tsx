import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentCard from './CommentCard';

export default {
    title: 'entities/comment/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'text',
        user: {
            id: '1',
            username: 'username',
            avatar: 'https://avatars.githubusercontent.com/u/69904650?s=400&u=2c3a6015db26f57b2f557d1a1ec58bf54a35f573&v=4',
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'text',
        user: {
            id: '1',
            username: 'username',
            avatar: 'https://avatars.githubusercontent.com/u/69904650?s=400&u=2c3a6015db26f57b2f557d1a1ec58bf54a35f573&v=4',
        },
    },
    isLoading: true,
};
