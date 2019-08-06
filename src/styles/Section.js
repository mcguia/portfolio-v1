import styled from 'styled-components';
import media from './media';


const Section = styled.section`
    margin: 0 auto;

    @media ${media.sm} {
        padding: 5em 0;
    }
    @media ${media.md} {
        padding: 7em 0;
    }
    @media ${media.lg} {
        padding: 10em 0;
    }
    padding: 5em 0;
`;

export default Section;
