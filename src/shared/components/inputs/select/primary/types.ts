import {
    InputHTMLAttributes,
    FC,
    ReactNode,
    ReactElement,
    HTMLAttributes
} from 'react';

export interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
    value?: string | number,
    isActive?: boolean,
    disabled?: boolean
}

export interface SelectProps<TOption, RIsMultiply extends boolean = false> extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange' | 'children'> {
    /**
     * How large should the button be?
     */
    sizeMod?: "sm" | "md";
    /**
     * Button contents
     */
    label?: string;
    /**
     * Is button disabled
     */
    disabled?: boolean;
    /**
     * Button modifications
     */
    mod?: 'primary' | 'secondary',
    /**
     * Button modifications
     */
    options: TOption[],

    isMultiply?: RIsMultiply,


    value: RIsMultiply extends true ? TOption[] : TOption,
    onChange: RIsMultiply extends true ? (value: TOption[]) => void : (value: TOption) => void,
    children: (SelectItem: FC<SelectItemProps>, option: TOption, isActive: boolean) => ReactElement,
    renderActive?: RIsMultiply extends true ? (items: TOption[], deleteOption: (option: TOption) => void) => ReactNode | ReactNode[] : (item: TOption) => ReactNode,
    optionValueKey: keyof TOption
    optionLabelKey: keyof TOption
}

export interface SelectInputWrapperProps {
    isSelectOpen: boolean,
    hasSelectedValue: boolean
}