import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { expect, within } from "@storybook/test";
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta<ButtonProps>;

export default meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    size: "large",
    radius: "large",
    color: "secondary",
    variant: "bordered",
    isDisabled: false,
    isLoading: false,
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    expect(button).toHaveTextContent("Button");
  },
};