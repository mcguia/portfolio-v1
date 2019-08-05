import React from 'react';
import { Header, Landing, Layout, Projects } from '@components';
import { mixins, Main } from '@styles';
import styled from 'styled-components';

const MainContainer = styled(Main)`
    ${mixins.sidePadding};
`;

const HomePage = () => (
    <Layout>
        <MainContainer id="content">
            <Header />
            <Landing />
            <Projects />
        </MainContainer>
    </Layout>
);

export default HomePage;
