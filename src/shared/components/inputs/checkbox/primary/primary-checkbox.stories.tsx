import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryCheckbox } from "./primary-checkbox"
import { CheckboxProps } from "./types";

export default {
  title: "Inputs/Checkbox",
  component: PrimaryCheckbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <>
  <PrimaryCheckbox {...args} />
  <br/>
  <br/>
  <PrimaryCheckbox {...args} />
</>;

export const Primary = Template.bind({});
Primary.args = { label: "Button", size: "md", mod: 'primary', disabled: false, labelPosition: 'left' };