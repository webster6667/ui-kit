import React, {useState} from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryTextInputPassword } from "./index"
import { PrimaryTextInputPasswordProps, PrimaryInputChangeHandler } from "./types";



export default {
  title: "Components/Inputs/TextInput/Primary",
  component: PrimaryTextInputPassword,
} as Meta;


const Template: Story<PrimaryTextInputPasswordProps> = (args) => {
  const [value, setValue] = useState(''),
        inputChangeHandler:PrimaryInputChangeHandler = (value) => {
          setValue(value)
        }

  return (<>
    <PrimaryTextInputPassword
        {...args}
        value={value}
        onChange={inputChangeHandler}
    />
  </>)
}

export const Password = Template.bind({});
Password.args = { label: "Label", sizeMod: "md", mod: 'primary', disabled: false, type: 'text', error: ''};