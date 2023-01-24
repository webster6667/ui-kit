import { PrimaryTextInputProps as GlobalTextInputProps} from "@global-ui/inputs/text-input/primary"
export type {PrimaryInputChangeHandler} from '@global-ui/inputs/text-input/primary'

export interface PrimaryTextInputProps extends Omit<GlobalTextInputProps, 'type' | 'LeftIcon' | 'RightIcon'> {
    hint?: string,
    icon?: 'user' | 'laptop'
}