import React, {FC} from "react";
import {PrimaryChip as GlobalPrimaryChip} from "@global-ui/chip/primary";
import {IconWrapper} from './styles'

import {PrimaryChipProps} from './types'
import {iconList} from "./const";


export const PrimaryChip: FC<PrimaryChipProps> = ({icon, ...props}) => {

    
    return (<GlobalPrimaryChip {...props}
                               renderBeforeLabel={icon && (() => (<IconWrapper>
                                   {iconList[icon]()}
                               </IconWrapper>))}
    />)
}