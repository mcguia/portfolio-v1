import React from 'react';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';


const HeaderContainer = styled(Headroom)`
    position: absolute;
    width: 100%;
    margin-top: 2em;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
`;

const Header = () => (
    <HeaderContainer>
        <div>Header</div>
    </HeaderContainer>
);

export default Header;
