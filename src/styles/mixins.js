import { css } from "styled-components"
import media from "./media"

const mixins = {
  sideMargin: css`
    margin: 0 1.2em;
    @media ${media.md} {
      margin: 0 3em;
    }
    @media ${media.lg} {
      margin: 0 6em;
    }
    @media ${media.xl} {
      margin: 0 12em;
    }
  `,

  row: css`
    @media ${media.md} {
      display: flex;
    }
  `,

  column: css`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
  `,
}

export default mixins
