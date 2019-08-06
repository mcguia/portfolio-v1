import styled from 'styled-components';
import media from './media';
import theme from './theme';
const { fontSizes } = theme;

const Header = styled.h3`
    @media ${media.md} {
        font-size: ${fontSizes.xl};
    }
    @media ${media.lg} {
        font-size: ${fontSizes.xxl};
    }
    font-size: ${fontSizes.lg};
    margin-top: 0;
`;

export default Header;
