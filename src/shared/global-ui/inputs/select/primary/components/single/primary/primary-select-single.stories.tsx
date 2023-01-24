import React, {useState} from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimarySelectSingle } from "./primary-select-single"
import { PrimarySelectProps } from "./../../../types";

export default {
  title: "Inputs/Select/Single",
  component: PrimarySelectSingle,
} as Meta;

const Template: Story<PrimarySelectProps<{name: string, id: string}, boolean>> = (args) => {
    const options = [
        {name: 'ua', id: '0'},
        {name: 'en', id: '1'},
        {name: 'ru', id: '2'},
    ]
    const [value, setValue] = useState<{name: string, id: string} | undefined>({name: 'ua', id: '0'})

  return (
      <>
          <PrimarySelectSingle
              options={options}
              value={value}
              onChange={setValue}
              optionValueKey='name'
              optionLabelKey='name'
          >
              {(SelectItem, {name}) => {
                  return (<SelectItem key={name} >
                      {name}
                  </SelectItem>)
              }}
          </PrimarySelectSingle>

      </>)
};

export const Primary = Template.bind({});
Primary.args = { label: "Button", sizeMod: "md", mod: 'primary', disabled: false };