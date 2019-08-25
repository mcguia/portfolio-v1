import React from 'react';
import { Footer, Landing, Projects } from '@components';
import { mixins, Main } from '@styles';
import styled from 'styled-components';

const MainContainer = styled(Main)`
    ${mixins.sideMargin};
`;

const HomePage = () => (
    <MainContainer id="content">
        <Landing />
        <Projects />
        <Footer />
    </MainContainer>
);

export default HomePage;
