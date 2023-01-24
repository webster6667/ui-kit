import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryRadio } from "./primary-radio"
import { RadioProps } from "./types";

export default {
  title: "Inputs/Radio",
  component: PrimaryRadio,
} as Meta;

const Template: Story<RadioProps> = (args) => <>
  <PrimaryRadio {...args} />
  <br/>
  <br/>
  <PrimaryRadio {...args} />
</>;

export const Primary = Template.bind({});
Primary.args = { label: "Button", size: "md", mod: 'primary', disabled: false, labelPosition: 'left' };