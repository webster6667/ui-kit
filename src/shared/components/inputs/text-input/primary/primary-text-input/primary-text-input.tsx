import React, {FC} from "react";
import { PrimaryTextInput as GlobalPrimaryTextInput} from "@global-ui/inputs/text-input/primary"
import {PrimaryTooltip} from '@shared-components/tooltip/primary'
import {iconList} from "./const"
import { ReactComponent as HintIcon} from '@icons/hint.svg'

import {PrimaryTextInputProps} from './types'


export const PrimaryTextInput: FC<PrimaryTextInputProps> = ({ hint, icon, ...props}) => {
    return (<GlobalPrimaryTextInput {...props}
                                    LeftIcon={icon && iconList[icon]}
                                    RightIcon={hint && (() => (
                                        <PrimaryTooltip title={hint} placement='top-right' >
                                            <HintIcon/>
                                        </PrimaryTooltip>
                                        ))}
    />)
}