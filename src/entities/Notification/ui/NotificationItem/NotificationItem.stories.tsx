import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

const item = {
    id: '1',
    title: 'Уведомление',
    description: 'Нормализация данных',
};

export const Normal = Template.bind({});
Normal.args = {
    item,
};
Normal.decorators = [StoreDecorator({})];
