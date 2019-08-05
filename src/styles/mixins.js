import { css } from 'styled-components';
import media from './media';


const mixins = {
  sidePadding: css`
    padding: 0 1.2em;
    @media ${media.md} {
        padding: 0 3em;
    }
    @media ${media.lg} {
        padding: 0 5em;
    }
    @media ${media.xl} {
        padding: 0 9.375em;
    }

  `,
};

export default mixins;
