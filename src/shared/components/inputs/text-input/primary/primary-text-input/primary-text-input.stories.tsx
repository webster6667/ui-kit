import React, {useState} from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import {PrimaryTextInput} from "./primary-text-input"
import {PrimaryTextInputProps} from "./types";
import {PrimaryInputChangeHandler} from "@global-ui/inputs/text-input/primary";

export default {
    title: "Components/Inputs/TextInput/Primary",
    component: PrimaryTextInput,
    argTypes: {
        icon: {
            options: ['user', 'laptop', null],
            control: { type: 'radio'}
        },
    }
} as Meta;

const Template: Story<PrimaryTextInputProps> = ({...args}) => {
    const [value, setValue] = useState(''),
          inputChangeHandler:PrimaryInputChangeHandler = (value) => {
            setValue(value)
          }

    return <div>
        <PrimaryTextInput {...args} value={value} onChange={inputChangeHandler} />
    </div>
};

export const Text = Template.bind({});
Text.args = { label: "Label", sizeMod: "md", mod: 'primary', disabled: false, type: 'text', error: '', hint: 'Input description'};
