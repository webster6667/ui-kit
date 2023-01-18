import {FC, ReactElement} from "react";
import {SelectItemProps} from "@shared/components/inputs/select/primary/types";


export interface PrimarySelectMultiplyProps<TOption extends object>
 {
    options?: TOption[],
    value?: TOption[] | [],
    optionValueKey: keyof TOption
    optionLabelKey: keyof TOption,
    children?: (SelectItem: FC<SelectItemProps>, option: TOption, isActive: boolean) => ReactElement,
    onChange?: (value: TOption[] | []) => void,
    onInputChange?: (value: string) => void,
    inputValue?: string,
 }