import React, {ReactElement} from "react";
import {PrimarySelect} from "./../../../primary-select";
import {PrimarySelectSingleProps} from './types'


export const PrimarySelectSingle = <
    TOption extends object
    >({
          ...props
      }:PrimarySelectSingleProps<TOption>):ReactElement => {

    return <PrimarySelect isMultiply={false} {...props} />
}