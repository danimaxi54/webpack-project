import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticlesPageFilters from './ArticlesPageFilters';

export default {
    title: 'pages/article/ArticlePageFilters',
    component: ArticlesPageFilters,
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
