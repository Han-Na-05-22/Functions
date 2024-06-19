import { StoryFn } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './interface';

export default {
	title: 'Button',
	component: Button,
};

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	buttonType: 'primary',
	children: 'Primary Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
	buttonType: 'secondary',
	children: 'Secondary Button',
};

export const Danger = Template.bind({});

Danger.args = {
	buttonType: 'danger',
	children: 'Danger Button',
};

export const Warning = Template.bind({});

Warning.args = {
	buttonType: 'warning',
	children: 'Warning Button',
};

export const Success = Template.bind({});

Success.args = {
	buttonType: 'success',
	children: 'Success Button',
};
