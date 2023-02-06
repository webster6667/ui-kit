import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import {PrimaryChip} from "./primary-chip"
import {PrimaryChipProps} from "./types";
import { ReactComponent as HintIcon} from '@icons/hint.svg'


export default {
    title: "GlobalUi/PrimaryChip",
    component: PrimaryChip,
} as Meta;

const Template: Story<PrimaryChipProps> = ({...args}) => {

    return <div>
        <PrimaryChip {...args} DeleteIcon={<HintIcon />} />
    </div>
};

export const Primary = Template.bind({});
Primary.args = {label: 'My label'};
