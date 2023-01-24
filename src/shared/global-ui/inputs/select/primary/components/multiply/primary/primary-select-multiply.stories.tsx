import React, {useState} from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimarySelectMultiply } from "./primary-select-multiply"
import { PrimarySelectProps } from "./../../../types";

export default {
  title: "Inputs/Select/Multiply",
  component: PrimarySelectMultiply,
} as Meta;

const Template: Story<PrimarySelectProps<{name: string, id: string}, boolean>> = (args) => {
    const options = [
        {name: 'ua', id: '0'},
        {name: 'en', id: '1'},
        {name: 'ru', id: '2'},
    ]
    const [value, setValue] = useState<{name: string, id: string}[] | []>([
        {name: 'ua', id: '0'},
    ])

  return (
      <>
          <PrimarySelectMultiply
              options={options}
              value={value}
              onChange={setValue}
              optionValueKey='id'
              optionLabelKey='name'
          >
              {(SelectItem, {id, name}) => {
                  return (<SelectItem key={id}  >
                      {name}
                  </SelectItem>)
              }}
          </PrimarySelectMultiply>

      </>)
};

export const Primary = Template.bind({});
Primary.args = { label: "Button", sizeMod: "md", mod: 'primary', disabled: false };