import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryRangeSlider } from "./primary-range-slider"
import { RangeSliderProps } from "./types";

export default {
  title: "Inputs/RangeSlider",
  component: PrimaryRangeSlider,
} as Meta;

const Template: Story<RangeSliderProps> = (args) => <>
  <PrimaryRangeSlider {...args} renderTooltip={(value) => value + ' sec'} />
</>;

export const Primary = Template.bind({});
Primary.args = { label: "Button", sizeMod: "md", mod: 'primary', disabled: false };