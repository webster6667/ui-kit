import React, {useState} from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimarySelect } from "./primary-select"
import { SelectProps } from "./types";

export default {
  title: "Inputs/Select",
  component: PrimarySelect,
} as Meta;

const Template: Story<SelectProps<{name: string, id: number}>> = (args) => {
    const options = [
        {name: 'ua', id: '0'},
        {name: 'en', id: '1'},
        {name: 'ru', id: '2'},
    ]
    const [value, setValue] = useState([{name: 'ua', id: '0'}])

  return (
      <>
          <PrimarySelect
              isMultiply
              options={options}
              value={value}
              onChange={setValue}
              optionValueKey={'id'}
          >
              {(SelectItem, {id, name}) => {
                  return (<SelectItem key={id} >
                      {name}
                  </SelectItem>)
              }}
          </PrimarySelect>

          <br/>

          {value.map(({name}) => {
              return <div>{name}</div>
          })}
      </>)
};

export const Primary = Template.bind({});
Primary.args = { label: "Button", sizeMod: "md", mod: 'primary', disabled: false };