import styled, { css } from 'styled-components'
import { textAlign } from 'styled-system'
import theme from '../../common/theme'

const headerFonts = css`
  font-family: oswald, serif;
  font-weight: 400;
  color: ${theme.color.black};
  margin-bottom: 32px;
  ${textAlign}
`

export const H1 = styled.h1`
  font-size: 4.4rem;
  ${headerFonts}
`

export const H3 = styled.h3`
  ${headerFonts}
`
