import {InputHTMLAttributes, HTMLInputTypeAttribute, ReactNode} from 'react';

type IconFn = () => ReactNode

let PrimaryInputSizeList: 'sm' | 'md'

export interface PrimaryInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /**
     * Input type
     */
    type?: Extract<HTMLInputTypeAttribute, 'number' | 'text' | 'password'>;
    /**
     * Input size
     */
    sizeMod?: typeof PrimaryInputSizeList;
    /**
     * Input label
     */
    label?: string;
    /**
     * Is input disabled
     */
    disabled?: boolean;
    /**
     * Input modifications
     */
    mod?: 'primary' | 'secondary',
    /**
     * Input error text
     */
    error?: string,
    /**
     * Input left icon
     */
    LeftIcon?: ReactNode | IconFn,
    /**
     * Input right icon
     */
    RightIcon?: ReactNode | IconFn,
}

export interface InputProps extends PrimaryInputProps {
    /**
     * is Input value filled
     */
    isInputFilled?: boolean,
    /**
     * is Input has error
     */
    hasError?: boolean
}

export interface ErrorProps {
    /**
     * Is error visible
     */
    isVisible?: boolean
}

export interface IconWrapperProps extends Pick<PrimaryInputProps, 'sizeMod'> {
    position: 'left' | 'right'
}