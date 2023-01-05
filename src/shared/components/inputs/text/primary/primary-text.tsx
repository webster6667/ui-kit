import React, {FC} from "react";
import {PrimaryInputProps} from "./types"
import {Wrapper, Input, Label, InputWrapper, Error, IconWrapper} from "./styles"

// Вынести в hoc
// const [inputType, setInputType] = useState(type),
//       togglePasswordVisibilityHandler = (e: MouseEvent<HTMLElement>) => {
//         e.preventDefault()
//         setInputType(inputType !== 'password' ? 'password' : 'text')
//       }

/**
 * Primary text input
 */
export const PrimaryInput:FC<PrimaryInputProps> = ({
   value= '',
   label = 'placeholder',
   error,
   sizeMod= 'md',
   LeftIcon,
   RightIcon,
   ...props
})  => {
    const isInputFilled = String(value).length > 0,
          hasError = String(error).length > 0,
          hasLeftIcon = Boolean(LeftIcon),
          hasRightIcon = Boolean(RightIcon)


    return (<Wrapper>
        <InputWrapper>
            {hasLeftIcon && <IconWrapper position='left' sizeMod={sizeMod} >
                {typeof LeftIcon === 'function' ? LeftIcon() : LeftIcon}
            </IconWrapper>}
            {hasRightIcon && <IconWrapper position='right' sizeMod={sizeMod} >
                {typeof RightIcon === 'function' ? RightIcon() : RightIcon}
            </IconWrapper>}
            <Input
                {...props}
                autoComplete={'off'}
                value={value}
                isInputFilled={isInputFilled}
                sizeMod={sizeMod}
                hasError={hasError}
            />
            <Label>{label}</Label>
        </InputWrapper>
        <Error isVisible={hasError} >
            {error}
        </Error>
    </Wrapper>)
};