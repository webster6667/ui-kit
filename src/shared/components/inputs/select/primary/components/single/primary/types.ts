import {FC, ReactElement} from "react";
import {SelectItemProps} from "@shared/components/inputs/select/primary/types";


export interface PrimarySelectSingleProps<TOption extends object>
 {
    options?: TOption[],
    value?: TOption | undefined,
    optionValueKey: keyof TOption
    optionLabelKey: keyof TOption,
    children?: (SelectItem: FC<SelectItemProps>, option: TOption, isActive: boolean) => ReactElement,
    onChange?: (value: TOption | undefined) => void
 }