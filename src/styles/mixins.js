import { css } from 'styled-components';
import media from './media';


const mixins = {
  sideMargin: css`
    margin: 0 1.2em;
    @media ${media.md} {
        margin: 0 3em;
    }
    @media ${media.lg} {
        margin: 0 5em;
    }
    @media ${media.xl} {
        margin: 0 9.375em;
    }
  `,
  projectMargin: css`
    margin: 0;
    @media ${media.md} {
        margin: 0 3em;
    }
    @media ${media.lg} {
        margin: 0 7em;
    }
    @media ${media.xl} {
        margin: 0 5em;
    }
    @media (min-width: 1350px) {
        margin: 0 12em;
    }
  `,
};

export default mixins;
