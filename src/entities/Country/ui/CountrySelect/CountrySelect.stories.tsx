import { ComponentMeta, ComponentStory } from '@storybook/react';
import CountrySelect from './CountrySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};