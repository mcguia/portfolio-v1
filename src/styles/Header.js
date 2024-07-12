import styled from "styled-components"
import media from "./media"
import theme from "./theme"
const { fontSizes } = theme

const Header = styled.h3`
  font-size: ${fontSizes.lg};
  @media ${media.md} {
    font-size: ${fontSizes.lg};
  }
  @media ${media.lg} {
    font-size: ${fontSizes.xl};
  }
  @media ${media.xl} {
    font-size: ${fontSizes.xxl};
  }
  margin-top: 0;
`

export default Header
