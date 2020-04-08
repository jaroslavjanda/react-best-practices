import styled, { css } from 'styled-components'
import { textAlign } from 'styled-system'
import theme from '../../common/theme'

const headerFonts = css`
  font-family: Oswald, serif;
  font-weight: 400;
  color: ${theme.color.black};
  padding-top: 128px;
  padding-bottom: 64px;
  margin: 0px;
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
  ${textAlign}
`
