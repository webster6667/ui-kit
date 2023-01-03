import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import {PrimaryButton} from "./primary-button"
import { ButtonProps } from "./types";

export default {
  title: "Inputs/Button",
  component: PrimaryButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => <PrimaryButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Button", sizeMod: "sm", mod: 'primary' };