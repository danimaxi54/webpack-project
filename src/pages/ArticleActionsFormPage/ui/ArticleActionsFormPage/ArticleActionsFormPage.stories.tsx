import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleActionsFormPage from './ArticleActionsFormPage';

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleActionsFormPage,
} as ComponentMeta<typeof ArticleActionsFormPage>;

const Template: ComponentStory<typeof ArticleActionsFormPage> = (args) => (
    <ArticleActionsFormPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
