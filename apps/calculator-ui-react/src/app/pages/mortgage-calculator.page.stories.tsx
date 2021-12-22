import { Story, Meta } from '@storybook/react';
import { MortgageCalculator } from './mortgage-calculator.page';

export default {
  component: MortgageCalculator,
  title: 'MortgageCalculator',
} as Meta;

const Template: Story = (args) => <MortgageCalculator {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
