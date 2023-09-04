import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: { controls: { expanded: true } },
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		variant: "primary",
		children: "See The Work",
	},
};

export const Text: Story = {
	args: {
		variant: "text",
		children: "Menu",
		size: "sm",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		children: "Button",
	},
};
export const Medium: Story = {
	args: {
		size: "md",
		children: "Button",
	},
};
export const Large: Story = {
	args: {
		size: "lg",
		children: "Button",
	},
};
