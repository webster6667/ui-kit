import React, {ReactElement} from "react";
import {PrimarySelect} from "./../../../primary-autocomplete";
import {PrimarySelectMultiplyProps} from './types'


export const PrimarySelectMultiply = <
    TOption extends object
    >({
          ...props
      }:PrimarySelectMultiplyProps<TOption>):ReactElement => {

    return <PrimarySelect isMultiply {...props} />
}