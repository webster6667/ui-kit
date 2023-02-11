import styled from 'styled-components'

import {BoxProps} from './types'

export const Box = styled.div<BoxProps>`
  display: flex;
  flex-grow: ${({ isFluid }) => isFluid ? '1' : 'initial'};
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  flex-direction: ${({ direction = 'column' }) => direction};
`

