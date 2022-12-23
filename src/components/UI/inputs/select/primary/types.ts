import {InputHTMLAttributes, FC, ReactNode, Dispatch, SetStateAction, ReactElement, JSXElementConstructor, HTMLAttributes} from 'react';

type optionProps = {
    name: string,
    value: string | number
}

export interface SelectItemProps extends HTMLAttributes<any> {
    value?: string | number,
    isActive?: boolean
    // children: ReactNode
}

export interface SelectProps<TOptions> extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange' | 'children'> {
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
    options: TOptions[],

    isMultiply?: boolean,

    value: TOptions | TOptions[],
    onChange: Dispatch<SetStateAction<TOptions[]>>,
    children: (SelectItem: FC<SelectItemProps>, option: TOptions) => ReactElement,
    renderActive: (SelectItem: FC<SelectItemProps>, option: TOptions) => ReactElement,
    optionValueKey: keyof TOptions
}


export function IsMultiply<T>(value: T, isMultiply: boolean): value is T {
    return Array.isArray(value) && isMultiply
}