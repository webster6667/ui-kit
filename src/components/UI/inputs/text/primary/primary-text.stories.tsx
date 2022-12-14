import React, {useState} from "react";
import { ChangeHandler } from "@common-types"
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryInput } from "./primary-text"
import { InputProps } from "./types";
import { ReactComponent as UserIcon } from '@icons/user.svg'
import { ReactComponent as HintIcon } from '@icons/hint.svg'



export default {
  title: "Inputs/Text",
  component: PrimaryInput,
} as Meta;


const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState(''),
        inputChangeHandler:ChangeHandler = (e) => {
          let value = e.target.value
          setValue(value)
        }

  return (<>
    <PrimaryInput
        {...args}
        value={value}
        onChange={inputChangeHandler}
        LeftIcon={<UserIcon />}
    />
    <br/>
    <PrimaryInput
          {...args}
          value={value}
          onChange={inputChangeHandler}
          RightIcon={<HintIcon />}
    />
  </>)
}

export const Primary = Template.bind({});
Primary.args = { label: "Label", sizeMod: "md", mod: 'primary', disabled: false, type: 'text', error: ''};