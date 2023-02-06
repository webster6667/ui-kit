import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import {PrimaryChip} from "./primary-chip"
import {PrimaryChipProps} from "./types";

export default {
    title: "Components/PrimaryChip",
    component: PrimaryChip,
    argTypes: {
        hasDelete: {
            control: 'boolean'
        },
    }
} as Meta;

const Template: Story<PrimaryChipProps> = ({...args}) => {

    return <div>
        <PrimaryChip {...args} />
    </div>
};

export const Primary = Template.bind({});
Primary.args = {label: 'Label'};
