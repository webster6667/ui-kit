import React, {ReactElement, FC, ReactNode} from "react";
import { SelectProps, SelectItemProps } from "./types"
import { SelectInputWrapper } from "./styles"
import { Text } from '@typography'

export const PrimarySelectOption: FC<SelectItemProps> = ({children, isActive, ...props}) => {
    return <div {...props} style={{background: isActive ? 'red' : 'silver'}} >
        {children}
    </div>
}

/**
 * Primary UI component for user interaction
 */
export const PrimarySelect = <T extends object>({
  sizeMod = "md",
  mod = 'primary',
  name= 'select',
  options,
  isMultiply = false,
  children,
  optionValueKey,
  onChange,
  value
}:SelectProps<T>):ReactElement  => {
    const selectOption = (option: T) => {
        if (Array.isArray(value)) {
            
            if (value.find((item) => item[optionValueKey] === option[optionValueKey])) {
                const a = value.filter((item) => item[optionValueKey] !== option[optionValueKey])
                onChange(a)
            } else {
                onChange([...value, option])
            }

        } else if (value[optionValueKey] === option[optionValueKey]) {
            onChange(option)
        }
    }

    const fn = (item: ReactElement<SelectItemProps>, option: T) => {
        let isActive = false

        if (Array.isArray(value)) {

            if (value.find((item) => item[optionValueKey] === option[optionValueKey])) {
                isActive = true
            }

        } else if (value[optionValueKey] === option[optionValueKey]) {
            isActive = true
        }


        const cloned = React.cloneElement(item, {
            onClick: () => {
                selectOption(option)
            },
            isActive
        })

        return cloned
    }
    const optList = options.map((option) => {
        const SelectOption = fn(children(PrimarySelectOption, option), option)

        return SelectOption
    })


    return <div>
        <SelectInputWrapper>
            {/*{ActiveInput}*/}
        </SelectInputWrapper>

        <br/>

        <div>
            {optList}
        </div>
    </div>

};