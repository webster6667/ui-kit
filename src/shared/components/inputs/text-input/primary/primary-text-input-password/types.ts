import { PrimaryTextInputProps } from "@global-ui/inputs/text-input/primary"
export type {PrimaryInputChangeHandler} from '@global-ui/inputs/text-input/primary'

export interface PrimaryTextInputPasswordProps extends Omit<PrimaryTextInputProps, 'type' | 'LeftIcon' | 'RightIcon'> {
    type?: 'password' | 'text'
}