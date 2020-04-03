import styled, { css } from 'styled-components'
import { textAlign } from 'styled-system'
import theme from '../../common/theme'

const headerFonts = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 400;
  color: ${theme.color.white};
  text-transform: uppercase;
  margin-bottom: 32px;
  ${textAlign}
`

export const H1 = styled.h1`
  ${headerFonts}
`

export const H3 = styled.h3`
  ${headerFonts}
`
