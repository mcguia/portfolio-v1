import React from 'react';
import { Layout } from '@components';
import { mixins, Main } from '@styles';
import styled from 'styled-components';

const MainContainer = styled(Main)`
    ${mixins.sidePadding};
`;

const HomePage = () => (
    <Layout>
        <MainContainer id="content">
            <h1>{"test"}</h1>
            {"test test test"}
        </MainContainer>
    </Layout>
);

export default HomePage;
