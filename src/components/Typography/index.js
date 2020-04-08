import styled, { css } from 'styled-components'
import { textAlign } from 'styled-system'
import theme from '../../common/theme'

const headerFonts = css`
  font-family: Oswald, serif;
  font-weight: 400;
  color: ${theme.color.black};
  letter-spacing: -2px;
  margin: 64px 0px;
  text-transform: uppercase;
  ${textAlign}
`

export const H1 = styled.h1`
  font-size: 4.4rem;
  ${headerFonts}
`

export const H2 = styled.h1`
  font-size: 3.4rem;
  ${headerFonts}
`

export const H3 = styled.h3`
  font-family: Oswald, sans-serif;
  font-weight: 400;
  color: ${theme.color.black};
  margin: 64px 0px;
  ${textAlign}
`
