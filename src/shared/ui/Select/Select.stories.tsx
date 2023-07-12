import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    // eslint-disable-next-line react/destructuring-assignment
    const [option, setOption] = useState(args.value);

    const onChange = (value: string) => setOption(value);

    return <Select {...args} value={option} onChange={onChange} />;
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    value: '123',
    options: [
        {
            value: '123',
            content: 'Первый пункт',
        },
        {
            value: '1234',
            content: 'Второй пункт',
        },
    ],
};
