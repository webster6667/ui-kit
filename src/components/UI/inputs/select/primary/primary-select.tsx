import React, {ReactElement, FC, Dispatch, SetStateAction, ReactNode} from "react";
import {useToggle} from '@hook'
import {Wrapper, SelectInputWrapper, OptionListWrapper, SelectedValuesWrapper, SelectOption, Label} from "./styles"

import { ReactComponent as ArrowDownIcon } from '@icons/arrows/arrow-down.svg'
import { ReactComponent as CrossIcon } from '@icons/crosses/cross.svg'

import { SelectProps, SelectItemProps } from "./types"


export const PrimarySelectOption: FC<SelectItemProps> = ({children, isActive, ...props}) => {
    return <SelectOption isActive={isActive} {...props} >
        {children}
    </SelectOption>
}

/**
 * Primary UI component for user interaction
 */
export const PrimarySelect = <TOption extends object, RIsMultiply extends boolean = false>({
  sizeMod = "md",
  mod = 'primary',
  name= 'select',
  placeholder = 'Placeholder',
  options,
  isMultiply,
  children,
  optionValueKey,
  optionLabelKey,
  onChange,
  value,
  renderActive,
  tabIndex = 1,
}:SelectProps<TOption, RIsMultiply>):ReactElement  => {
    const IsMultiplySelect = (onChange: Dispatch<SetStateAction<TOption[]>> | Dispatch<SetStateAction<TOption>>, isMultiply?: boolean): onChange is Dispatch<SetStateAction<TOption[]>> => {
        return isMultiply || false;
    }
    const IsSelectValueArray = (value: TOption | TOption[]): value is TOption[] => {
        return Array.isArray(value)
    }
    const IsRenderForMultiply = (renderActive: ((items: TOption[], deleteOption: (option: TOption) => void) => ReactNode | ReactNode[]) | ((item: TOption) => ReactNode), isMultiply?: boolean): renderActive is (items: TOption[], deleteOption: (option: TOption) => void) => ReactNode | ReactNode[] => {
        return isMultiply || false;
    }
    const hasSelectedValue = IsSelectValueArray(value) ? value.length > 0 : Boolean(value)

    const [isSelectOpen, toggleSelect, setSelectState] = useToggle(false),
          closeSelect = () => setSelectState(false),
          SelectedItem = () => {

            if (renderActive) {
                return IsRenderForMultiply(renderActive, isMultiply)
                    ? renderActive(value as TOption[], deleteSelect)
                    : renderActive(value as TOption)
            } else {
                return <div>
                    {
                        IsSelectValueArray(value)
                            ? value.map((item) => (item[optionLabelKey])).join(', ')
                            : String((value as TOption)[optionValueKey])
                    }
                </div>
            }


          }


    const deleteSelect = (option: TOption) => {
        if (IsMultiplySelect(onChange, isMultiply) && IsSelectValueArray(value) && value.find((item) => item[optionValueKey] === option[optionValueKey])) {
            const a = value.filter((item) => item[optionValueKey] !== option[optionValueKey])
            onChange(a)
        }
    }

    const clearSelection = () => {

        if (IsMultiplySelect(onChange, isMultiply)) {
            onChange([])
        } else {
            //@ts-ignore
            onChange()
        }

    }

    const selectOption = (option: TOption) => {
        if (IsMultiplySelect(onChange, isMultiply)) {

            if (IsSelectValueArray(value)) {

                if (value.find((item) => item[optionValueKey] === option[optionValueKey])) {
                    const a = value.filter((item) => item[optionValueKey] !== option[optionValueKey])
                    onChange(a)
                } else {
                    onChange([...value, option])
                }

            }

        } else if (!IsSelectValueArray(value)) {
            (value as TOption)[optionValueKey] === option[optionValueKey]
            onChange(option)
        }
    }

    const fn = (item: ReactElement<SelectItemProps>, option: TOption, isActive: boolean) => {

        const cloned = React.cloneElement(item, {
            onClick: () => {
                !item.props.disabled && selectOption(option)
                !isMultiply && closeSelect()

            },
            isActive
        })

        return cloned
    }
    const optionList = options.map((option) => {
        let isActive = false

        if (IsSelectValueArray(value)) {

            if (value.find((item) => item[optionValueKey] === option[optionValueKey])) {
                isActive = true
            }

        } else if ((value as TOption)[optionValueKey] === option[optionValueKey]) {
            isActive = true
        }

        const SelectOption = fn(children(PrimarySelectOption, option, isActive), option, isActive)

        return SelectOption
    })


    return <Wrapper
                tabIndex={tabIndex}
                onBlur={closeSelect}
    >
        <SelectInputWrapper
            onClick={toggleSelect}
            isSelectOpen={isSelectOpen}
            hasSelectedValue={hasSelectedValue}
        >

            <SelectedValuesWrapper>
                {
                    SelectedItem()
                }
            </SelectedValuesWrapper>

                {hasSelectedValue && <CrossIcon onClick={clearSelection} />}
                <ArrowDownIcon className='select-arrow' />

        </SelectInputWrapper>

        <Label>{placeholder}</Label>

        <OptionListWrapper >
            {optionList}
        </OptionListWrapper>
    </Wrapper>

};