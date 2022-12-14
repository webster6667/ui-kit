import {InputHTMLAttributes} from 'react';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * How large should the button be?
     */
    size?: "sm" | "md";
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
     * Label position
     */
    labelPosition?: 'right' | 'left',
}